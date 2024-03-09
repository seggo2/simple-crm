import { DatePipe } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild, inject, ChangeDetectorRef } from '@angular/core';
import { DocumentData, Firestore, QueryDocumentSnapshot, collection, onSnapshot, query } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { Chart, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';
Chart.register(...registerables)
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  firestore: Firestore = inject(Firestore);
  allUsers!: any[];
  lastmonthCompare!:string;

  constructor() {
  }

  async ngOnInit() {
    await this.subUsers();
  }


  async subUsers() {
    const q = query(this.getNoteRef());
    return onSnapshot(q, (snapshot) => {
      this.allUsers = [];
      snapshot.forEach((element: QueryDocumentSnapshot<DocumentData>) => {
        this.allUsers.push(this.setNoteObject(element.data(), element.id));
      });
      this.drawChart()
    });
  }

  getNoteRef() {
    return collection(this.firestore, 'user');
  }

  setNoteObject(obj: any, id: string) {
    return {
      id: id,
      firstName: obj.firstName || "",
      lastName: obj.lastName || "",
      birthDate: obj.birthDate || "",
      email: obj.email || "",
      street: obj.street || "",
      zipCode: obj.zipCode || 0,
      city: obj.city || "",
      position: obj.position || "",
      phoneNumber: obj.phoneNumber || "",
      salaryYear: obj.salaryYear || 0,
      insurance: obj.insurance || "",
      workPlace: obj.workPlace || "",
      dayIssue: obj.dayIssue || "",
    };
  }


  async drawChart() {
    let resultArray = this.filterDataByMonth()
    const ctx = document.getElementById('myChart');
    new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: ' New Coworkers of year 2024',
          data: resultArray,
          borderColor: '#0000',
          backgroundColor: '#7b1fa2',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  filterDataByMonth() {
    const resultArray = Array.from({ length: 13 }, () => 0);
    this.allUsers.forEach(item => {
      if (item.dayIssue) {
        const date = new Date(item.dayIssue);
        const month = date.getMonth();
        resultArray[month]++;
      }
    });
    this.compareCurrentAndLastMonth(resultArray);
    return resultArray;
  }

  async compareCurrentAndLastMonth(resultArray: any) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentMonthCount = resultArray[currentMonth];
    const lastMonthCount = resultArray[currentMonth - 1];
    const percentageDifference = ((currentMonthCount - lastMonthCount) / lastMonthCount) * 100;
    const resultString = (percentageDifference >= 0) ? `+ ${percentageDifference}%` : `${percentageDifference}%`;
    this.lastmonthCompare=resultString;
  }
}

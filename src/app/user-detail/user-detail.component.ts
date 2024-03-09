import { Component, inject } from '@angular/core';
import { Firestore, collection, deleteDoc, doc, onSnapshot } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.class';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { EdditAdressDialogComponent } from '../dialogs/eddit-adress-dialog/eddit-adress-dialog.component';
import { EdditUserDialogComponent } from '../dialogs/eddit-user-dialog/eddit-user-dialog.component';
@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatDialogModule, MatButtonModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  Firestore = inject(Firestore);
  userId = "";
  singleUser: User = new User;

  
  
  dateConverter(type: string ){
    if(type=='birthday'){
      let dateBirthday = new Date(+this.singleUser.birtDate);

      return dateBirthday.toLocaleDateString()
    }else if(type=='issue'){
      let dateIssue = new Date(+this.singleUser.dayIssue);

      return dateIssue.toLocaleDateString()
    }
  return ''
  }


  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id') ?? "";
      this.getSingleUser()
    });
  }

  getSingleUser() {
    onSnapshot(this.getSingleDocRef('user', this.userId), (data) => {
      let info: any = data.data();
      this.singleUser = new User(info);
    })
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.Firestore, colId), docId)
  }


  edditAdressDetail() {
    let dialog = this.dialog.open(EdditAdressDialogComponent)
    dialog.componentInstance.user = new User(this.singleUser.toJson())
    dialog.componentInstance.userId = this.userId;

  }

  edditUserDetail() {
    let dialog = this.dialog.open(EdditUserDialogComponent)
    dialog.componentInstance.user = new User(this.singleUser.toJson())
    dialog.componentInstance.userId = this.userId;
  }

  async deleteUser(){
   const userRef =this.getSingleDocRef('user', this.userId);;
    try {
      await deleteDoc(userRef);
      this.router.navigate(['/user']);
      console.log('Benutzer erfolgreich gelöscht:', this.userId);
    } catch (error) {
      console.error('Fehler beim Löschen des Benutzers:', error);
    }
  }
}

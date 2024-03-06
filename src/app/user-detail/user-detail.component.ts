import { Component, inject } from '@angular/core';
import { Firestore, collection, doc, onSnapshot } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.class';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatDialogModule,MatButtonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  Firestore = inject(Firestore);
  userId = "";
  singleUser: User = new User;

  constructor(private route: ActivatedRoute) {
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


  openEditDialog(){
    
  }
}

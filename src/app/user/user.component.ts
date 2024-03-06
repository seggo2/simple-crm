import { Component,inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, onSnapshot, query, QueryDocumentSnapshot, DocumentData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatCardModule, CommonModule,RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(public dialog: MatDialog) {
    this.subUsers()
  }
  firestore: Firestore = inject(Firestore);
  user = new User();
  allUsers: any[] = [];

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }

  subUsers() {
    const q = query(this.getNoteRef());
    return onSnapshot(q, (snapshot) => {
      this.allUsers = [];
      snapshot.forEach((element: QueryDocumentSnapshot<DocumentData>) => {
        this.allUsers.push(this.setNoteObject(element.data(), element.id));
      });
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
    };
  }
}


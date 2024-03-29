import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialog, } from '@angular/material/dialog';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Firestore, collection, collectionData, doc, updateDoc, addDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user.class';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule, MatDatepickerModule, MatProgressBarModule, CommonModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  constructor(public dialog: MatDialog) { }

  loading = false;
  firestore: Firestore = inject(Firestore);
  user = new User();
  birthdate!: Date;
  timeIssue!: Date;

  async save(userForm: NgForm) {
    if (userForm.submitted && userForm.form.valid) {
      this.loading = true;
      this.user.dayIssue = this.timeIssue.getTime();
      this.user.birtDate = this.birthdate.getTime();
      await addDoc(this.getUserRef(), this.user.toJson()).catch(
        (err) => { console.error(err) })
      this.loading = false;
      this.dialog.closeAll();
    } else {
      console.log('false');

    }
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId)
  }

  getUserRef() {
    return collection(this.firestore, 'user')
  }
}


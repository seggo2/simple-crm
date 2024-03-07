import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../../models/user.class';
import { Firestore, collection, collectionData, doc, updateDoc, addDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { MatDialog, } from '@angular/material/dialog';

@Component({
  selector: 'app-eddit-user-dialog',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule, MatDatepickerModule, MatProgressBarModule,],
  templateUrl: './eddit-user-dialog.component.html',
  styleUrl: './eddit-user-dialog.component.scss'
})
export class EdditUserDialogComponent {
  constructor(public dialog: MatDialog) { }
  Firestore = inject(Firestore);
  userId!: string;
  user!: User;


  async save() {
   let Singledoc=this.getSingleDocRef('user', this.userId)
   await updateDoc(Singledoc,this.user.toJson())
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.Firestore, colId), docId)
  }
}

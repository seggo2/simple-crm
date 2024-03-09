import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialog, } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Firestore, collection, collectionData, doc, updateDoc, addDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { camp } from '../../../models/camp.class';


@Component({
  selector: 'app-dialog-add-camp',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule, MatDatepickerModule, MatProgressBarModule, CommonModule],
  templateUrl: './dialog-add-camp.component.html',
  styleUrl: './dialog-add-camp.component.scss'
})
export class DialogAddCampComponent {
  constructor(public dialog: MatDialog) { }
  loading = false;
  firestore: Firestore = inject(Firestore);
  camp = new camp();


  async save() {
    this.loading = true;
    await addDoc(this.getUserRef(), this.camp.toJson()).catch(
      (err) => { console.error(err) })
    this.loading = false;
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId)
  }

  getUserRef() {
    return collection(this.firestore, 'camp')
  }
}

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
import { Firestore, collection, collectionData, doc, updateDoc, addDoc, } from '@angular/fire/firestore';
import { MatDialog, } from '@angular/material/dialog';
import { camp } from '../../../models/camp.class';


@Component({
  selector: 'app-eddit-camp-dialog',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule, MatDatepickerModule, MatProgressBarModule,],
  templateUrl: './eddit-camp-dialog.component.html',
  styleUrl: './eddit-camp-dialog.component.scss'
})
export class EdditCampDialogComponent {
  constructor(public dialog: MatDialog) { }
  Firestore = inject(Firestore);
  campId!: string;
  singleDeliever!: camp;


  async save() {
    debugger
   let Singledoc=this.getSingleDocRef('camp', this.campId)
   await updateDoc(Singledoc,this.singleDeliever.toJson())
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.Firestore, colId), docId)
  }
}

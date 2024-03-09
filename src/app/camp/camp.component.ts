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
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, onSnapshot, query, QueryDocumentSnapshot, DocumentData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { camp } from '../../models/camp.class';
import { DialogAddCampComponent } from '../dialog-add-camp/dialog-add-camp.component';

@Component({
  selector: 'app-camp',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatCardModule, CommonModule,RouterLink],
  templateUrl: './camp.component.html',
  styleUrl: './camp.component.scss'
})
export class CampComponent {
  constructor(public dialog: MatDialog) {
    this.subUsers()
  }
  firestore: Firestore = inject(Firestore);
  camp = new camp();
  campSortiemnt: any[] = [];

  openDialog() {
    this.dialog.open(DialogAddCampComponent)
  }

  subUsers() {
    const q = query(this.getNoteRef());
    return onSnapshot(q, (snapshot) => {
      this.campSortiemnt = [];
      snapshot.forEach((element: QueryDocumentSnapshot<DocumentData>) => {
        this.campSortiemnt.push(this.setNoteObject(element.data(), element.id));
      });
      this.campSortiemnt.sort((a, b) => {
        const nameA = a.supplier.toLowerCase(); 
        const nameB = b.supplier.toLowerCase(); 
        return nameA.localeCompare(nameB);
      });
    });
  }

  getNoteRef() {
    return collection(this.firestore, 'camp');
  }

  setNoteObject(obj: any, id: string) {
    return {
      id: id,
      itemNumber: obj.itemNumber || "",
      supplier: obj.supplier || "",
      materialStandard: obj.materialStandard || "",
      cost: obj.cost || 0,
      weight: obj.weight || 0,
      number: obj.number || 0,
      numberOfRods: obj.numberOfRods || 0,
    };
  }
}

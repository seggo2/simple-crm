import { Component, inject } from '@angular/core';
import { Firestore, collection, deleteDoc, doc, onSnapshot } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { camp } from '../../models/camp.class';
import { EdditCampDialogComponent } from '../dialogs/eddit-camp-dialog/eddit-camp-dialog.component';

@Component({
  selector: 'app-camp-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatDialogModule, MatButtonModule, MatMenuModule],
  templateUrl: './camp-detail.component.html',
  styleUrl: './camp-detail.component.scss'
})
export class CampDetailComponent {
  Firestore = inject(Firestore);
  campId = "";
  singleDeliever: camp = new camp;
  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.campId = paramMap.get('id') ?? "";
      this.getSingleCamp()
    });
  }

  getSingleCamp() {
    onSnapshot(this.getSingleDocRef('camp', this.campId), (data) => {
      let info: any = data.data();
      this.singleDeliever = new camp(info);
    })
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.Firestore, colId), docId)
  }



  edditUserDetail() {
    let dialog = this.dialog.open(EdditCampDialogComponent)
    dialog.componentInstance.singleDeliever = new camp(this.singleDeliever.toJson())
    dialog.componentInstance.campId = this.campId;
  }

  
  async deleteUser(){
    const userRef =this.getSingleDocRef('camp', this.campId);;
     try {
       await deleteDoc(userRef);
       this.router.navigate(['/camp']);
       console.log('Benutzer erfolgreich gelöscht:', this.campId);
     } catch (error) {
       console.error('Fehler beim Löschen des Benutzers:', error);
     }
   }
}

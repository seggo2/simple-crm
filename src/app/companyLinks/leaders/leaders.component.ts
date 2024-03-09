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

@Component({
  selector: 'app-leaders',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatCardModule, CommonModule,RouterLink],
  templateUrl: './leaders.component.html',
  styleUrl: './leaders.component.scss'
})
export class LeadersComponent {

}

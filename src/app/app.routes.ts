import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CampComponent } from './camp/camp.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { CampDetailComponent } from './camp-detail/camp-detail.component';
import { LeadersComponent } from './companyLinks/leaders/leaders.component';
import { OfficeComponent } from './companyLinks/office/office.component';
import { Office1Component } from './companyLinks/office1/office1.component';
import { CNChall1Component } from './companyLinks/cnchall1/cnchall1.component';
import { CNChall2Component } from './companyLinks/cnchall2/cnchall2.component';
import { CNChall3Component } from './companyLinks/cnchall3/cnchall3.component';
import { MaterialCampComponent } from './companyLinks/material-camp/material-camp.component';

export const routes: Routes = [
    {path:'', component:DashboardComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'user', component:UserComponent},
    {path:'user/:id', component:UserDetailComponent},
    {path:'camp', component:CampComponent},
    {path:'assignments', component:AssignmentsComponent},
    {path:'camp/:id', component:CampDetailComponent},
    {path:'leaders', component:LeadersComponent},
    {path:'office1', component:OfficeComponent},
    {path:'office2', component:Office1Component},
    {path:'hall1', component:CNChall1Component},
    {path:'hall2', component:CNChall2Component},
    {path:'hall3', component:CNChall3Component},
    {path:'material', component:MaterialCampComponent},
];

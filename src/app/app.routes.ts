import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CampComponent } from './camp/camp.component';
import { AssignmentsComponent } from './assignments/assignments.component';

export const routes: Routes = [
    {path:'', component:DashboardComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'user', component:UserComponent},
    {path:'user/:id', component:UserDetailComponent},
    {path:'camp', component:CampComponent},
    {path:'assignments', component:AssignmentsComponent},
];

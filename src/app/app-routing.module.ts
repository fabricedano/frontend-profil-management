import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddedittypeuserComponent } from './addedittypeuser/addedittypeuser.component';
import { AddedituserComponent } from './addedituser/addedituser.component';
import { HomeComponent } from './home/home.component';
import { TypeuserListComponent } from './typeuser-list/typeuser-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:  HomeComponent},
  { path: 'users', component: UserListComponent },
  { path: 'typesuser', component: TypeuserListComponent},
  { path: 'adduser/:id', component: AddedituserComponent},
  { path: 'adduser', component: AddedituserComponent},
  { path: 'addtypeuser', component: AddedittypeuserComponent},
  { path: 'addtypeuser/:id', component: AddedittypeuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { UserListComponent } from './user-list/user-list.component';
import { UserServiceService } from './service/user-service.service';
import { TypeuserListComponent } from './typeuser-list/typeuser-list.component';
import { AddedituserComponent } from './addedituser/addedituser.component';
import { AddedittypeuserComponent } from './addedittypeuser/addedittypeuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TypeuserListComponent,
    AddedituserComponent,
    AddedittypeuserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
    
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

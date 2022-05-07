import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from '../model/user';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private service: UserServiceService, public router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.service.getUsersList();
  }

  public getType(user) {
    return user.typeUser.type
  }

  public onClick(user) {    
    this.service?.deleteUser(user.id).subscribe();
  }

}

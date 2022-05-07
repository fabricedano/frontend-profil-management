import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Typeuser } from '../model/typeuser';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-typeuser-list',
  templateUrl: './typeuser-list.component.html',
  styleUrls: ['./typeuser-list.component.scss']
})
export class TypeuserListComponent implements OnInit {

  typesuser: Observable<Typeuser[]>;

  constructor(private service: UserServiceService, public router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.typesuser = this.service.getTypeUsersList();
  }

  public onClick(typeuser) { 
    this.service?.deleteTypeUser(typeuser.id).subscribe();
  }

}

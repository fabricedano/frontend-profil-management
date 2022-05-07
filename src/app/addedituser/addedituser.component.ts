import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-addedituser',
  templateUrl: './addedituser.component.html',
  styleUrls: ['./addedituser.component.scss']
})

export class AddedituserComponent implements OnInit {

  form: FormGroup;


  typeUsersList: any[];
  typeUsersList$ : Observable<any> = this.service.getTypeUsersList().pipe(tap((list) => this.typeUsersList = list));

  currentUser: any;

  get buttontext(): string {
    return !!this.currentUser? 'Update' : 'Create';
  }
  constructor(private route: ActivatedRoute, private service: UserServiceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl('', Validators.required),
      firstName : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      typeUser : new FormControl('', Validators.required)
    })

    this.route.params.subscribe(params => {
      const id = (params['id']);
      if(id){
        this.service.getUserById(id).subscribe(res => {
          this.currentUser = res;
          this.form.patchValue({
          name: res.name,
          firstName: res.firstName,
          email: res.email,
          typeUser:  res.typeUser.id
        })
      })
      }
   });
  }


  public onSubmit(){
    if(this.form.valid){
      const valueToSend = this.form.getRawValue();
      if(this.currentUser) {
        this.service?.updateUser(this.currentUser.id, 
          {
            ...valueToSend,
            id: this.currentUser.id,
            typeUser: this.typeUsersList.find((value) => value.id === valueToSend.typeUser)
          }
          ).subscribe();
      } else {
        this.service?.addUser( 
          {
            ...valueToSend,
            id: Math.floor((Math.random() * 100) + 1),
            typeUser: this.typeUsersList.find((value) => value.id === valueToSend.typeUser)
          }
          ).subscribe();
      }
      console.log(valueToSend);
    }
  }

}

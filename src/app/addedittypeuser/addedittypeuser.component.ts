import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-addedittypeuser',
  templateUrl: './addedittypeuser.component.html',
  styleUrls: ['./addedittypeuser.component.scss']
})
export class AddedittypeuserComponent implements OnInit {

  form: FormGroup;

  currentTypeUser: any;

  get buttontext(): string {
    return !!this.currentTypeUser? 'Update' : 'Create';
  }

  constructor(private route: ActivatedRoute, private service: UserServiceService) { }
  

  ngOnInit(): void {
    
    this.form = new FormGroup({
      type : new FormControl('', Validators.required)
    })

    this.route.params.subscribe(params => {
      const id = (params['id']);
      if(id){
        this.service.getTypeUserById(id).subscribe(res => {
          this.currentTypeUser = res;
          this.form.patchValue({
          type:  res.type
        })
      })
      }
   });
  }

  public onSubmit(){
    if(this.form.valid){
      const valueToSend = this.form.getRawValue();
      if(this.currentTypeUser) {
        this.service?.updateTypeUser(this.currentTypeUser.id, 
          {
            ...valueToSend,
            id: this.currentTypeUser.id,
          }
          ).subscribe();
      } else {
        this.service?.addTypeUser( 
          {
            ...valueToSend,
            id: Math.floor((Math.random() * 100) + 1),
          }
          ).subscribe();
      }
    }
  }

}

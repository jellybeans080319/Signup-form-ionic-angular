import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userForm: FormGroup;
  validation_messages = {
    firstname : [
      {type: 'required', message: 'This field is required!'},
      {type: 'maxlength', message: 'Maximum of 10 characters only!'},
    ],
    lastname : [
      {type: 'required', message: 'This field is required!'},
      {type: 'maxlength', message: 'Maximum of 10 characters only!'},
    ],
    gender : [
      {type: 'required', message: 'This field is required!'},
    ],
    age : [
      {type: 'required', message: 'This field is required!'},
      {type: 'max', message: 'Age must be 0 - 99 only!'},
    ],
    email : [
      {type: 'required', message: 'This field is required!'},
      {type: 'email', message: 'Invalid Envalid Email Address!'},
    ],
    password : [
      {type: 'required', message: 'This field is required!'},
      {type: 'minlength', message: 'Password must be 8 characters long.'},
      {type: 'pattern', message: 'Password is weak..'},
    ]
  };
  constructor() {
    this.userForm=new FormGroup({
      firstname: new FormControl('',Validators.compose([
        Validators.required,
        Validators.maxLength(10)
    ])),
      lastname: new FormControl('',Validators.compose([
        Validators.required,
        Validators.maxLength(10)
    ])),
      gender: new FormControl('',Validators.required),
      age: new FormControl('',Validators.compose([
        Validators.required,
        Validators.max(99)
    ])),
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.email
    ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.maxLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$')
    ]))
    });
  }
onSubmit(value){
  console.log('Form Status: ', value.Status);
}
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  signupForm: FormGroup | undefined;

  constructor(){}
  ngOnInit(): void {
    this.signupForm =  new FormGroup({
      userName : new FormControl('', Validators.required),
      email : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
    });
    
  }

}

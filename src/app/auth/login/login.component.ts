import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginrequestPayload } from './login.request.payload';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  loginRequestPayload: LoginrequestPayload;
  registerSuccessMessage!: string;
  isError!: boolean;

  constructor( private authService: AuthService, private route: Router, private activatedRoute : ActivatedRoute, private toastr: ToastrService){
    this.loginRequestPayload ={
      username: '',
      password : ''
    }
  }

  ngOnInit():void{
    this.loginForm = new FormGroup({
      username : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    });

    this.activatedRoute.queryParams
      .subscribe(params => {
        if (params['registered'] !== undefined && params['registered'] === 'true') {
          this.toastr.success('Signup Successful');
          this.registerSuccessMessage = 'Please Check your inbox for activation email '
            + 'activate your account before you Login!';
        }
      });
  }

  login(){
    this.loginRequestPayload.username = this.loginForm.get('username')?.value;
    this.loginRequestPayload.password = this.loginForm.get('password')?.value;
    this.authService.login(this.loginRequestPayload).subscribe(data =>{ 
      if(data){
        this.isError =false;
        this.route.navigateByUrl('/');
        this.toastr.success('Login Successful');
      }else{
        this.isError =true;
      }
    });
  }
}

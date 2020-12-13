import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth-service/auth.service';
import {Router} from '@angular/router';
import firebase from 'firebase';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {

  email = "";
  password = "";
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' };
  valider:boolean;

  constructor(private router: Router,private AuthService:AuthService) { }

  ngOnInit(): void {
  }
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  ResetPassword(){
    this.clearErrorMessage();
    this.valider = false;
    if (this.validateForm(this.email, this.password)) {
      this.AuthService.resetMdp(this.email)
        .then(() => {
          this.valider = true;
          console.log('email exister ==>', this.valider) ;         
        }).catch(_error => {         
          this.error = _error;
          console.log("ERREUR TRANSLATE ==>",this.error.message);         
          
        })
    }
}


  

  validateForm(email, password)
  {
    if(email.lenght === 0)
    {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.lenght < 6)
    {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth-service/auth.service';
import {Router} from '@angular/router';
import firebase from 'firebase';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = "";
  password = "";
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' };

  constructor(private router: Router,private AuthService:AuthService) { }

  ngOnInit(): void {
  }

  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }

  register(){
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.AuthService.registerWithEmail(this.email, this.password)
        .then(() => {
          this.message = "Enregistrement effectué avec succès"
          //this.router.navigate(['/userinfo'])
        }).catch(_error => {
          this.error = _error;
          console.log("ERREUR TRANSLATE REGISTER ==>",this.error.message);
          this.router.navigate(['/register'])
        })
    }
  }





  ResetPassword(){
    firebase.auth().languageCode = 'fr'; // set with string
    if (this.validateForm(this.email, this.password)) {
    this.AuthService.resetMdp(this.email)
        .then( resp => console.log('sent!') )
        .catch( error => console.log('failed to send', error) );
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

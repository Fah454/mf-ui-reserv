import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email = "";
  password = "";
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' };
  message = '';
  constructor(private router: Router,private AuthService:AuthService) { }

  ngOnInit(): void {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  login()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.AuthService.loginWithEmail(this.email, this.password)
        .then(() => {
         
         this.router.navigate(['/userinfo'])
        }).catch(_error => {         
          this.error = _error;
          console.log("ERREUR TRANSLATE ==>",this.error.message);
          
          this.router.navigate(['/login'])
        })
    }
  }

  validateForm(email, password) {
    if (email.lenght === "") {
      this.errorMessage = "entrer email";
      return false;
    }

    if (password.lenght === "") {
      this.errorMessage = "entrer mot de passe";
      return false;
    }

    if (password.lenght < 6) {
      this.errorMessage = "Le mot de passe doit comporter au moins 6 caractères ";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { UserinfoComponent } from './login/userinfo/userinfo.component';
import { ForgotPwdComponent } from './login/forgot-pwd/forgot-pwd.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userinfo', component: UserinfoComponent },
  { path: 'forgot-mdp', component: ForgotPwdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

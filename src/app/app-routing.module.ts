import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AddbookComponent } from './components/addbook/addbook.component';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forget',
    component: ForgotPasswordComponent
  },
  {
    path: 'add',
    component: AddbookComponent
  },
  {
    path: 'reset',
    component: ResetPasswordComponent
  },
  { 
    path: '**',   
    redirectTo: '/index',  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

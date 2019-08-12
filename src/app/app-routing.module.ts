import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { NewsComponent } from './components/news/news.component';
import { SearchComponent } from './components/search/search.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
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
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'emplist',
    component: EmployeelistComponent
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

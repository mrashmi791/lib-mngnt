import { Component, OnInit } from '@angular/core';
import { Register } from './../../models/registration.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  register = new Register();

  constructor() { }

  ngOnInit() {
  }

  saveDetails() {
    console.log(this.register);
    
  }

}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = ""
  password: string = "";

  constructor (private loginService: LoginService, private toastrService : ToastrService, private route : Router) {
  }
  login() {
    if (this.loginService.login(this.email, this.password)) {
      this.route.navigate(['rooms']);
    }  
  }
}

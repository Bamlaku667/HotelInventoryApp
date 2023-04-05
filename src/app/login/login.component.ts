import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = ""
  password: string = "";

  constructor (private toastrService : ToastrService) {

  }
  login(loginForm : NgForm) {
   
    if (this.email === "admin@gmail.com" && this.password === "amin") {
      this.toastrService.success('login success')
      loginForm.reset()
    }
    console.log(this.email)
    console.log(this.password)

  }
}

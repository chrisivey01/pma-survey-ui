import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  warning: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  attemptLogin() {
    this.loginService.checkUser(this.username, this.password);
    this.warning = this.loginService.warning;
  }
}

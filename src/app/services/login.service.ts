import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  warning: string;
  constructor(private httpClient: HttpClient, private route: Router) { }

  checkUser(username, password) {
    this.httpClient.post('http://localhost:8080/login-info', {username, password}, {responseType: 'text'}).subscribe(
      data => {
        if ( data === 'Login failed.'){
          this.warning = 'Invalid ID/Password.';
        } else {
          this.route.navigate(['/items']);
        }
      }
    );
  }
}

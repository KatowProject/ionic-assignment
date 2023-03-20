import { Router } from '@angular/router';
import { StorageService } from './../localStorage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = {
    username: '',
    password: ''
  }

  constructor(private db: StorageService, private router: Router) {
    const username = this.db.get('username');
    const password = this.db.get('password');
    if (username) {
      this.router.navigateByUrl('home');
    }
  }

  login(): void {
    const { username, password } = this.form;
    this.db.set('username', username);
    this.db.set('password', password);

    this.router.navigateByUrl('welcome');
  }
}

import { Component } from '@angular/core';
import { StorageService } from '../localStorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form = {
    username: '',
    password: ''
  }

  constructor(private db: StorageService, private router: Router) {
    const username = this.db.get('username');
    const password = this.db.get('password');
    if (!username) {
      this.router.navigateByUrl('login');
    }
  }
}

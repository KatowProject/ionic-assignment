import { Component, OnInit } from '@angular/core';
import { StorageService } from '../localStorage';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  form = {
    username: '',
    password: ''
  }

  constructor(private db: StorageService) { }

  ngOnInit() {
    this.form.username = this.db.get('username');
    this.form.password = this.db.get('password');
  }

}

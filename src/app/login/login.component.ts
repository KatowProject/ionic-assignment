import { Router } from '@angular/router';
import { StorageService } from './../localStorage';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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

  constructor(private db: StorageService, private router: Router, private alertController: AlertController) {
    const username = this.db.get('username');
    const password = this.db.get('password');
    if (username) {
      this.router.navigateByUrl('home');
    }
  }

  login(): void {
    const { username, password } = this.form;
    if (!username || !password) {
      this.alertController.create({
        header: 'Alert',
        subHeader: 'Warning',
        message: 'Please enter username and password',
        buttons: ['OK']
      }).then(alert => alert.present());

      return;
    }

    this.db.set('username', username);
    this.db.set('password', password);

    this.alertController.create({
      header: 'Alert',
      subHeader: 'Success',
      message: 'Login successful',
      buttons: ['OK']
    }).then(alert => alert.present());

    this.router.navigateByUrl('home');
  }
}

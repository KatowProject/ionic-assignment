import { Component, OnInit } from '@angular/core';
import { StorageService } from '../localStorage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  constructor(private db: StorageService, private router: Router, public alertController: AlertController) {
    const username = this.db.get('username');
    const password = this.db.get('password');

    if (!username || !password) {
      this.showAlert();
      this.router.navigateByUrl('home');
    }
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Error',
      message: 'You are not logged in.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
    this.form.username = this.db.get('username');
    this.form.password = this.db.get('password');
  }


}

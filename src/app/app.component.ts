import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from './localStorage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  html: boolean;
  constructor(private db: StorageService, private router: Router, private alertController: AlertController) {
    // check route
    const routePath = window.location.pathname;
    if (routePath === '/login') {
      this.html = false;
    } else {
      this.html = true;
    }
  }

  ngOnInit() {
    console.log('AppComponent');
  }

  logout() {
    const username = this.db.get('username');
    const password = this.db.get('password');
    if (!username) {
      this.router.navigateByUrl('home');
    }

    this.alertController.create({
      header: 'Alert',
      subHeader: 'Warning',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        },
        {
          text: 'Okay',
          handler: () => {
            this.db.remove('username');
            this.db.remove('password');
            this.router.navigateByUrl('login');
          }
        }
      ]
    }).then(alert => alert.present());
  }
}

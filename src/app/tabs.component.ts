import { AlertController } from '@ionic/angular';
import { StorageService } from './localStorage';
import { Router } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.css']
})
export class TabsComponent {
  constructor(private db: StorageService, private router: Router, private alertController: AlertController) {
    console.log('TabsComponent');
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
            this.router.navigateByUrl('home');
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

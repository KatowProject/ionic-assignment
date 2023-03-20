import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from './../localStorage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(private db: StorageService, private router: Router, public alertController: AlertController) {
  }

  ngOnInit() {
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

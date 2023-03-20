import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  html: boolean;
  constructor() {
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
}

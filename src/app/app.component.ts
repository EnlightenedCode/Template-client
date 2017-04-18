import { Component } from '@angular/core';
import { Events, Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.component.html'
})

export class templateApp {

  constructor(
    public events: Events,
    public platform: Platform
  ) {
    console.log('hello');
    console.log('hello again');
    this.platformReady();
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
    //   this.splashScreen.hide();ss
    });
  }

}
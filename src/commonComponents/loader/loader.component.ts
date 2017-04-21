import { Component, Input, OnInit } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'loader-component',
  templateUrl: 'loader.component.html'
})

export class LoaderComponent implements OnInit {
  @Input() visible: boolean;

  currentLoading: any;

  constructor(
    public loadingCtrl: LoadingController
  ) {

  }

  ngOnInit() {
    console.log(this.visible);
    if (this.visible) {
      console.log('in this now');
      this.currentLoading = this.createLoader();

      this.currentLoading.present();

    } else {
      console.log('in this here');
      if (this.currentLoading) {
        this.currentLoading.dismiss();
      }
    }
  }

  createLoader() {
    return this.loadingCtrl.create({
      content: "Please wait..."
    });
  }

}
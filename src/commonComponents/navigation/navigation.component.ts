import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'navigation-component',
  templateUrl: 'navigation.component.html'
})

export class NavigationComponent implements OnInit {
  @Input() page: string;
  @Input() params: any = {};

  constructor(
    public nav: NavController
  ) {

  }

  ngOnInit() {

  }

}
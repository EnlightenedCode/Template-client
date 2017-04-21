import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { SharedWorkflows } from '../../providers/workflows/sharedWorkflows';
import { ConsoleLogService } from '../../providers/services/logger';
import { RootState } from '../../store/index';

@Component({
  selector: 'about-page',
  templateUrl: 'about.component.html'
})

export class AboutPage {

  public currentPageState;
  public pageName = 'About';
  constructor(
    private logger: ConsoleLogService,
    private _shared: SharedWorkflows,
    private ngRedux: NgRedux<RootState>,
  ) {
    let app_state = this.ngRedux.select(state => state.app);
    app_state.subscribe((data) => {
      if (data) {
        this.currentPageState = data.get('page');
      }
    })
  }

  ionViewDidEnter() {
    console.log(this.currentPageState);
    console.log('state');
    if (this.currentPageState !== this.pageName) {
      this._shared.goToPage(this.pageName);
    }
  }

}
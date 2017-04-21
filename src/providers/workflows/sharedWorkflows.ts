import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { NgRedux } from 'ng2-redux';
import { RootState } from '../../store/index';

@Injectable()
export class SharedWorkflows {

    constructor(
        private ngRedux: NgRedux<RootState>
    ) {

    }

    loaderShow() {
        this.ngRedux.dispatch({
            type: 'LOADER_SHOW'
        })
    }

    loaderHide() {
        this.ngRedux.dispatch({
            type: 'LOADER_HIDE'
        })
    }

    goToPage(page, pageParams = {}) {
        this.ngRedux.dispatch({
            type: 'GO_TO_PAGE',
            payload: {
                page: page,
                pageParams: pageParams
            }
        })
    }

}

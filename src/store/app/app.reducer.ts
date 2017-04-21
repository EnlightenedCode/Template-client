import { INITIAL_STATE } from './app.initial-state';
import { Map } from 'immutable';


export function appReducer(state: Map<string, any> = INITIAL_STATE, action): Map<string, any> {
    switch (action.type) {
        case 'LOADER_SHOW':
            return Map<string, any>({
                loading: true,
                page: state.get('page'),
                pageParams: state.get('pageParams')
            });
        case 'LOADER_HIDE':
            return Map<string, any>({
                loading: false,
                page: state.get('page'),
                pageParams: state.get('pageParams')
            });
        case 'GO_TO_PAGE':
            return Map<string, any>({
                loading: state.get('loading'),
                page: action.payload.page,
                pageParams: action.payload.pageParams
            });

        default:
            return state;
    }
}

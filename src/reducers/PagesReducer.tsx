import { PAGES_FAIL, PAGES_GET, PAGES_SUCCESS, PagesDispatchTypes, Pages } from '../actions/pagesActionsTypes';

export interface PagesState {
    loading: boolean;
    pages?: Pages[];
}

const defaultState: PagesState = {
    loading: false,
};
const pagesReducer = (state: PagesState = defaultState, action: PagesDispatchTypes): PagesState => {
    switch (action.type) {
        case PAGES_FAIL:
            return {
                loading: false,
            };
        case PAGES_GET:
            return {
                loading: true,
            };
        case PAGES_SUCCESS:
            return {
                loading: false,
                pages: action.payload,
            };
        default:
            return state;
    }
};
export default pagesReducer;

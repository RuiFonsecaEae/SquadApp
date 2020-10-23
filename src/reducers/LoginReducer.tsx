import { LOGGED, LoginDispatchTypes } from '../actions/LoginActionsTypes';

export interface LoginState {
    logged?: boolean;
}

const defaultState: LoginState = {
    logged: false,
};
const pagesReducer = (state: LoginState = defaultState, action: LoginDispatchTypes): LoginState => {
    switch (action.type) {
        case LOGGED:
            return {
                logged: false,
            };
        default:
            return state;
    }
};
export default pagesReducer;

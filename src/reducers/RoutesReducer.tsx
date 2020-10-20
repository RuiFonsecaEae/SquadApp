import {
    ROUTES_FAIL,
    ROUTES_LOADING,
    ROUTES_SUCCESS,
    RoutesDispatchTypes,
    Routes,
} from '../actions/routesActionsTypes';

export interface RoutesState {
    loading: boolean;
    routes?: Routes[];
}

const defaultState: RoutesState = {
    loading: false,
};
const routesReducer = (state: RoutesState = defaultState, action: RoutesDispatchTypes): RoutesState => {
    switch (action.type) {
        case ROUTES_FAIL:
            return {
                loading: false,
            };
        case ROUTES_LOADING:
            return {
                loading: true,
            };
        case ROUTES_SUCCESS:
            return {
                loading: false,
                routes: action.payload,
            };
        default:
            return state;
    }
};
export default routesReducer;

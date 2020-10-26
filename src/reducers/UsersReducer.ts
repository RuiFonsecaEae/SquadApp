import {
    GET_USERS,
    GET_USERS_FAIL,
    SET_USER,
    SET_USER_FAIL,
    User,
    UserDispatchTypes,
} from '../actions/UserActionsTypes';

export interface UsersState {
    users?: User[];
}

const defaultState: UsersState = {
    users: [],
};

const UsersReducer = (state: UsersState = defaultState, action: UserDispatchTypes): UsersState => {
    switch (action.type) {
        case GET_USERS:
            return {
                users: action.payload,
            };
        case GET_USERS_FAIL:
            return {
                users: [],
            };
        case SET_USER:
            return {
                users: action.payload,
            };
        case SET_USER_FAIL:
            return {
                users: [],
            };
        default:
            return state;
    }
};

export default UsersReducer;

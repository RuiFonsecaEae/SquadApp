import { SET_USERS, SET_USERS_FAIL, User, UserDispatchTypes } from '../actions/UserActionsTypes';

export interface UsersState {
    users?: User[];
}

const defaultState: UsersState = {
    users: [],
};

const UsersReducer = (state: UsersState = defaultState, action: UserDispatchTypes): UsersState => {
    switch (action.type) {
        case SET_USERS:
            return {
                users: action.payload,
            };
        case SET_USERS_FAIL:
            console.log(action);
            return {
                users: [],
            };
        default:
            return state;
    }
};

export default UsersReducer;

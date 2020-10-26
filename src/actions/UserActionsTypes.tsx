export const GET_USERS = 'GET_USERS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';
export const SET_USER = 'SET_USER';
export const SET_USER_FAIL = 'SET_USER_FAIL';

export type User = {
    id: string;
    username: string;
    password: string;
    easterEgg: [];
    private: boolean;
};

export interface GetUser {
    type: typeof GET_USERS;
    payload: User[];
}

export interface GetUserFail {
    type: typeof GET_USERS_FAIL;
}

export interface SetUser {
    type: typeof SET_USER;
    payload: User[];
}

export interface SetUserFail {
    type: typeof SET_USER_FAIL;
}

export type UserDispatchTypes = GetUser | GetUserFail | SetUser | SetUserFail;

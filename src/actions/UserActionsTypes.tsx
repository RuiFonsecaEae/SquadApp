export const SET_USERS = 'SET_USERS';
export const SET_USERS_FAIL = 'SET_USERS_FAIL';

export type User = {
    id: string;
    username: string;
    password: string;
    easterEgg: [];
    private: boolean;
};

// export type UserFail = [];

export interface SetUser {
    type: typeof SET_USERS;
    payload: User[];
}

export interface SetUserFail {
    type: typeof SET_USERS_FAIL;
}

export type UserDispatchTypes = SetUser | SetUserFail;

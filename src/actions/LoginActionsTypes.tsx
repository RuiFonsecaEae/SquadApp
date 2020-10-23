export const LOGGED = 'LOGGED';

export type Logged = {
    logged: boolean;
};

export interface SetLogged {
    type: typeof LOGGED;
    logged: false;
}

export type LoginDispatchTypes = SetLogged;

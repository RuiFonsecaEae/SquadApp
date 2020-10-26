import { LOGGED, LoginDispatchTypes } from './LoginActionsTypes';
import { Dispatch } from 'react';

export const GetLogin = () => async (dispatch: Dispatch<LoginDispatchTypes>): Promise<void> => {
    try {
        dispatch({
            type: LOGGED,
            logged: false,
        });
    } catch (e) {
        console.log('Login error', e);
    }
};

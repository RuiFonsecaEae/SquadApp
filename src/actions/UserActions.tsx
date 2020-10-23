import { SET_USERS, SET_USERS_FAIL, UserDispatchTypes } from './UserActionsTypes';
import { Dispatch } from 'react';
import axios from 'axios';

export const GetUsers = () => async (dispatch: Dispatch<UserDispatchTypes>): Promise<void> => {
    try {
        const resp = await axios.get(`https://my-json-server.typicode.com/RuiFonsecaEae/SquadApp/users/`);
        console.log(resp);
        dispatch({
            type: SET_USERS,
            payload: resp.data,
        });
    } catch (e) {
        console.log(e);
        dispatch({
            type: SET_USERS_FAIL,
        });
    }
};

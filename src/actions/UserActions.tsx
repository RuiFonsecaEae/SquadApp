import { GET_USERS, GET_USERS_FAIL, SET_USER, SET_USER_FAIL, UserDispatchTypes } from './UserActionsTypes';
import { Dispatch } from 'react';
import axios from 'axios';

export const GetUsers = () => async (dispatch: Dispatch<UserDispatchTypes>): Promise<void> => {
    try {
        const resp = await axios.get(`https://my-json-server.typicode.com/RuiFonsecaEae/SquadApp/users/`);
        console.log('GetUsers', resp);
        dispatch({
            type: GET_USERS,
            payload: resp.data,
        });
    } catch (e) {
        dispatch({
            type: GET_USERS_FAIL,
        });
    }
};

export const SetUser = () => async (dispatch: Dispatch<UserDispatchTypes>): Promise<void> => {
    try {
        const resp = await axios.post(`https://my-json-server.typicode.com/RuiFonsecaEae/SquadApp/users/`);
        console.log('SetUsers', resp);
        dispatch({
            type: SET_USER,
            payload: resp.data,
        });
    } catch (e) {
        dispatch({
            type: SET_USER_FAIL,
        });
    }
};

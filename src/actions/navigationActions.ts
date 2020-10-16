import { Dispatch } from 'redux';
import {
    NAVIGATION_FAIL,
    NAVIGATION_LOADING,
    NAVIGATION_SUCCESS,
    NavigationDispatchTypes,
} from './navigationActionsTypes';
import axios from 'axios';

export const GetNavigation = () => async (dispatch: Dispatch<NavigationDispatchTypes>) => {
    try {
        dispatch({
            type: NAVIGATION_LOADING,
        });
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);

        dispatch({
            type: NAVIGATION_SUCCESS,
            payload: resp.data,
        });
    } catch (e) {
        dispatch({
            type: NAVIGATION_FAIL,
        });
    }
};

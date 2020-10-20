import { Dispatch } from 'redux';
import { ROUTES_LOADING, ROUTES_SUCCESS, ROUTES_FAIL, RoutesDispatchTypes } from './routesActionsTypes';
import axios from 'axios';

export const GetRoutes = () => async (dispatch: Dispatch<RoutesDispatchTypes>): Promise<void> => {
    try {
        dispatch({
            type: ROUTES_LOADING,
        });
        const resp = await axios.get(`https://my-json-server.typicode.com/RuiFonsecaEae/SquadApp/routes/`);

        dispatch({
            type: ROUTES_SUCCESS,
            payload: resp.data,
        });
    } catch (e) {
        dispatch({
            type: ROUTES_FAIL,
        });
    }
};

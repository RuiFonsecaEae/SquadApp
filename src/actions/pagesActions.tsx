import { Dispatch } from 'redux';
import { PAGES_GET, PAGES_SUCCESS, PAGES_FAIL, PagesDispatchTypes } from './pagesActionsTypes';
import axios from 'axios';

export const GetPages = () => async (dispatch: Dispatch<PagesDispatchTypes>): Promise<void> => {
    try {
        dispatch({
            type: PAGES_GET,
        });
        const resp = await axios.get(`https://my-json-server.typicode.com/RuiFonsecaEae/SquadApp/pages/`);

        dispatch({
            type: PAGES_SUCCESS,
            payload: resp.data,
        });
    } catch (e) {
        dispatch({
            type: PAGES_FAIL,
        });
    }
};

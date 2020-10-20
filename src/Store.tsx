import { createStore, applyMiddleware, AnyAction, CombinedState } from 'redux';
import { RootReducer, RootState } from './reducers/RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const Store = createStore<
    CombinedState<RootState>,
    AnyAction,
    {
        dispatch: unknown;
    },
    {}
>(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof RootReducer>;

export default Store;

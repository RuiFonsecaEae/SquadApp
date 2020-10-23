import { combineReducers } from 'redux';
import pokemonReducer, { PokemonState } from './PokemonReducer';
import routesReducer, { RoutesState } from './RoutesReducer';
import pagesReducer, { PagesState } from './PagesReducer';
import UsersReducer, { UsersState } from './UsersReducer';
import LoginReducer, { LoginState } from './LoginReducer';

export interface RootState {
    pokemon: PokemonState;
    routes: RoutesState;
    pages: PagesState;
    users: UsersState;
    logged: LoginState;
}
export const RootReducer = combineReducers<RootState>({
    pokemon: pokemonReducer,
    routes: routesReducer,
    pages: pagesReducer,
    users: UsersReducer,
    logged: LoginReducer,
});

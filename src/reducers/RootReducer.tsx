import { combineReducers } from 'redux';
import pokemonReducer, { PokemonState } from './PokemonReducer';
import routesReducer, { RoutesState } from './RoutesReducer';
import pagesReducer, { PagesState } from './PagesReducer';

export interface RootState {
    pokemon: PokemonState;
    routes: RoutesState;
    pages: PagesState;
}
export const RootReducer = combineReducers<RootState>({
    pokemon: pokemonReducer,
    routes: routesReducer,
    pages: pagesReducer,
});

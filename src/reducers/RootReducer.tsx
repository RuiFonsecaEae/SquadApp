import { combineReducers } from 'redux';
import pokemonReducer, { PokemonState } from './PokemonReducer';
import routesReducer, { RoutesState } from './RoutesReducer';

export interface RootState {
    pokemon: PokemonState;
    routes: RoutesState;
}
export const RootReducer = combineReducers<RootState>({
    pokemon: pokemonReducer,
    routes: routesReducer,
});

import { Dispatch } from 'redux';
import { POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS, PokemonDispatchTypes } from './pokemonActionsTypes';
import axios from 'axios';

export const GetPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
        dispatch({
            type: POKEMON_LOADING,
        });
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        dispatch({
            type: POKEMON_SUCCESS,
            payload: resp.data,
        });
    } catch (e) {
        dispatch({
            type: POKEMON_FAIL,
        });
    }
};

import React, { FC, useState } from 'react';
import './PokemonSearch.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import { GetPokemon } from '../../actions/pokemonActions';

const PokemonSearch: FC = () => {
    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState('');
    const pokemonState = useSelector((state: RootStore) => state.pokemon);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);
    const handleSubmit = () => dispatch(GetPokemon(pokemonName));

    console.log(pokemonState);
    return (
        <div className="pokemon-search">
            <h3>Pokemons</h3>
            <div className="pokemon-search-holder">
                <div className="search-area">
                    <h3>Search</h3>
                    <div className="group">
                        <label>Pokemon Name</label>
                        <input type="text" onChange={handleChange} />
                    </div>
                    <div className="group">
                        <button onClick={handleSubmit}>Search </button>
                    </div>
                </div>
                {pokemonState.pokemon && (
                    <div className="results">
                        <img src={pokemonState.pokemon.sprites?.front_default} alt="" />
                        {pokemonState.pokemon.abilities &&
                            pokemonState.pokemon.abilities.map((ability, idx) => {
                                return <span key={idx}>{ability.ability.name}</span>;
                            })}
                    </div>
                )}
            </div>
            <a
                className="info-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
            >
                List of Pokemon names.
            </a>
        </div>
    );
};
export default PokemonSearch;

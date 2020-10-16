import React, { FC, useState } from 'react';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import { GetPokemon } from '../../actions/pokemonActions';

const Login: FC = () => {
    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState('');
    const pokemonState = useSelector((state: RootStore) => state.pokemon);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);
    const handleSubmit = () => dispatch(GetPokemon(pokemonName));

    console.log(pokemonState);
    return (
        <div className="login">
            <div>
                <h3>Search</h3>
                <div className="form-group">
                    <label>Pokemon Name</label>
                    <input type="text" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <button onClick={handleSubmit}>Search </button>
                </div>
            </div>
            {pokemonState.pokemon && (
                <div>
                    <img src={pokemonState.pokemon.sprites.front_default} alt="" />
                    {pokemonState.pokemon.abilities.map((ability, idx) => {
                        return <span key={idx}>{ability.ability.name}</span>;
                    })}
                </div>
            )}
        </div>
    );
};
export default Login;

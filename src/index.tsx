import React from 'react';
import ReactDOM from 'react-dom';
import './styles/normalize.css';
import './styles/fonts.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import PokemonSearch from './components/pokemon_search/PokemonSearch';
import { Provider } from 'react-redux';
import store from './Store';
ReactDOM.render(
    <Provider store={store}>
        <PokemonSearch />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

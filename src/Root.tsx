import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './Store';
import App from './App';

const Root = () => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}></Route>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root;

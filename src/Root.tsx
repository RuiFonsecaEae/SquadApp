import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Store from './Store';
import App from './App';

const Root = (): JSX.Element => (
    <Provider store={Store}>
        <Router>
            <Route path="/" component={App}></Route>
            <div>Root.tsx</div>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;

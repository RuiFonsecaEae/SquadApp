import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Store from './Store';
import App from './App';
import Navigation from './components/navigation/Navigation';
import Routes from './components/Routes';

const Root = (): JSX.Element => (
    <Provider store={Store}>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>Root.tsx</div>
        <Router>
            <App>
                <Navigation></Navigation>
                <Routes></Routes>
            </App>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Store from './Store';
import App from './App';
import Navigation from './components/navigation/Navigation';
import About from './components/pages/About';
import { Playground } from './components/pages/Playground';
import { Private } from './components/pages/Private';
import Home from './components/pages/Home';

const Root = (): JSX.Element => (
    <Provider store={Store}>
        <div>Root.tsx</div>
        <Router>
            <App>
                <Navigation></Navigation>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/playground" component={Playground}></Route>
                <Route path="/private" component={Private}></Route>
            </App>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;

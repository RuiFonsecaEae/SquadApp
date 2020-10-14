import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { Navigation } from './components/navigation/Navigation';
import { Home } from './components/pages/Home';
import About from './components/pages/About';
import { Gallery } from './components/pages/Gallery';

export const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <div>
                    <Navigation></Navigation>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/gallery">
                            <Gallery />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;

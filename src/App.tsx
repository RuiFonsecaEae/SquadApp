import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { GetRoutes } from './actions/routesActions';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
// import { Navigation } from './components/navigation/Navigation';
// import { Home } from './components/pages/Home';
// import About from './components/pages/About';
// import { Playground } from './components/pages/Playground';

interface OwnProps {}
interface ConnectedProps {}
interface ConnectedDispatch {
    GetRoutes: () => ReturnType<typeof GetRoutes>;
}
type Props = OwnProps & ConnectedProps & ConnectedDispatch;

export const App: React.FC<Props> = ({ GetRoutes }): JSX.Element => {
    useEffect(() => {
        GetRoutes();
    });
    return <div className="App"></div>;
};

const mapDispatchToProps: MapDispatchToPropsParam<ConnectedDispatch, OwnProps> = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            GetRoutes,
        },
        dispatch,
    );
export default connect(null, mapDispatchToProps)(App);

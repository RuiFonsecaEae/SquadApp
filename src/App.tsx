import React, { useEffect } from 'react';
import './App.scss';
import { GetRoutes } from './actions/routesActions';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

interface OwnProps {}
interface ConnectedProps {}
interface ConnectedDispatch {
    GetRoutes: () => ReturnType<typeof GetRoutes>;
}
type Props = OwnProps & ConnectedProps & ConnectedDispatch;

export const App: React.FC<Props> = ({ GetRoutes, children }): JSX.Element => {
    useEffect(() => {
        GetRoutes();
    });
    return (
        <div className="App">
            <div>App.tsx</div>
            {children}
        </div>
    );
};

const mapDispatchToProps: MapDispatchToPropsParam<ConnectedDispatch, OwnProps> = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            GetRoutes,
        },
        dispatch,
    );
export default connect(null, mapDispatchToProps)(App);

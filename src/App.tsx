import React, { useEffect } from 'react';
import './App.scss';
import { GetRoutes } from './actions/routesActions';
import { GetPages } from './actions/pagesActions';
import { GetUsers } from './actions/UserActions';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { GetLogin } from './actions/LoginActions';

interface OwnProps {}
interface ConnectedProps {}
interface ConnectedDispatch {
    GetRoutes: () => ReturnType<typeof GetRoutes>;
    GetPages: () => ReturnType<typeof GetPages>;
    GetUsers: () => ReturnType<typeof GetUsers>;
    GetLogin: () => ReturnType<typeof GetLogin>;
}
type Props = OwnProps & ConnectedProps & ConnectedDispatch;

export const App: React.FC<Props> = ({ GetRoutes, GetPages, GetUsers, GetLogin, children }): JSX.Element => {
    useEffect(() => {
        GetRoutes();
        GetPages();
        GetUsers();
        GetLogin();
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
            GetPages,
            GetUsers,
            GetLogin,
        },
        dispatch,
    );
export default connect(null, mapDispatchToProps)(App);

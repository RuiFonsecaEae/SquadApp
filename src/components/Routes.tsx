import React from 'react';
import { Pages } from '../actions/pagesActionsTypes';
import { connect, MapStateToPropsParam } from 'react-redux';
import { RootState } from '../reducers/RootReducer';
import { Link, Route, Switch } from 'react-router-dom';
import { PageContainer } from './containers/PageContainer';
import { User } from '../actions/UserActionsTypes';
import { UsersState } from '../reducers/UsersReducer';
import { Logged } from '../actions/LoginActionsTypes';
import { LoginState } from '../reducers/LoginReducer';
import { LoginButton } from './buttons/LoginButton';

interface OwnProps {}

export interface ConnectedProps {
    pages?: Pages[];
    users?: User[];
    logged?: Logged;
}
export type Props = OwnProps & ConnectedProps;

export type States = RootState & UsersState & LoginState;

const Routes: React.FC<Props> = ({ pages, users, logged }) => {
    console.log(pages);
    console.log(users);
    console.log('logged', logged);
    return (
        <Switch>
            {pages?.map((page, index) => (
                <Route exact path={`/` + page.slug} key={index}>
                    {page.slug !== '' && (
                        <Link to="/" className="back-home-button">
                            Back Home
                        </Link>
                    )}
                    <LoginButton logged />
                    <PageContainer {...page} />
                </Route>
            ))}
        </Switch>
    );
};

const mapStateToProps: MapStateToPropsParam<ConnectedProps, OwnProps, States> = ({ pages, users }) => ({
    pages: pages.pages,
    users: users.users,
});
export default connect(mapStateToProps, null)(Routes);

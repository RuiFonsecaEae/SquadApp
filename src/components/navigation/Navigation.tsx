import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import { Routes } from '../../actions/routesActionsTypes';
import { connect, MapStateToPropsParam } from 'react-redux';
import { RootState } from '../../reducers/RootReducer';
interface OwnProps {}

export interface ConnectedProps {
    routes?: Routes[];
}
export type Props = OwnProps & ConnectedProps;

const Navigation: React.FC<Props> = ({ routes }) => {
    console.log(routes);
    return (
        <div className="nav-container">
            <nav>
                <ul>
                    {routes?.map((route, index) => (
                        <li key={index}>
                            <Link to={route.slug}>{route.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

const mapStateToProps: MapStateToPropsParam<ConnectedProps, OwnProps, RootState> = ({ routes }) => ({
    routes: routes.routes,
});
export default connect(mapStateToProps, null)(Navigation);

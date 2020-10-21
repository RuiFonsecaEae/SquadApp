import React from 'react';
import { Pages } from '../actions/pagesActionsTypes';
import { connect, MapStateToPropsParam } from 'react-redux';
import { RootState } from '../reducers/RootReducer';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { PageContainer } from './containers/PageContainer';

interface OwnProps {}

export interface ConnectedProps {
    pages?: Pages[];
}
export type Props = OwnProps & ConnectedProps;

const Routes: React.FC<Props> = ({ pages }) => {
    console.log(pages);
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            {pages?.map((page, index) => (
                <Route path={`/` + page.slug} key={index}>
                    <Link to="/" className="back-home-button">
                        Back Home
                    </Link>
                    <PageContainer title={page.title} subTitle={page.subTitle} />
                </Route>
            ))}
        </Switch>
    );
};

const mapStateToProps: MapStateToPropsParam<ConnectedProps, OwnProps, RootState> = ({ pages }) => ({
    pages: pages.pages,
});
export default connect(mapStateToProps, null)(Routes);

import React from 'react';
import { Pages } from '../actions/pagesActionsTypes';
import { connect, MapStateToPropsParam } from 'react-redux';
import { RootState } from '../reducers/RootReducer';
import { Link, Route, Switch } from 'react-router-dom';
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
            {pages?.map((page, index) => (
                <Route exact path={`/` + page.slug} key={index}>
                    {page.slug != '' && (
                        <Link to="/" className="back-home-button">
                            Back Home
                        </Link>
                    )}
                    <PageContainer {...page} />
                </Route>
            ))}
        </Switch>
    );
};

const mapStateToProps: MapStateToPropsParam<ConnectedProps, OwnProps, RootState> = ({ pages }) => ({
    pages: pages.pages,
});
export default connect(mapStateToProps, null)(Routes);

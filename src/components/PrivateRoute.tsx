import React from 'react';
import { getAuthUser } from '../api/auth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            getAuthUser() ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

export default PrivateRoute;
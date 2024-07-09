import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
    />
);

export default PrivateRoute;
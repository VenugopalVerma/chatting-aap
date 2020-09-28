import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { Route, Redirect } from 'react-router-dom';
// import { isLogin } from '../utils';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const auth = useSelector(state => state.firebase.auth);
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLoaded(auth) && !isEmpty(auth) && restricted? 
                <Redirect to="/private" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;
import React from "react";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { Route, Redirect } from "react-router-dom";
// import { isLogin } from '../utils';

// const PrivateRoute = ({component: Component, ...rest}) => {
// return (

//     // Show the component only when the user is logged in
//     // Otherwise, redirect the user to /signin page
//     <Route {...rest} render={props => (
//         isLogin() ?
//             <Component {...props} />
//         : <Redirect to="/login" />
//     )} />
// );

// };

function PrivateRoute({ component: Component, ...rest }) {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          <Component />
        ) : (
          <Redirect
            to='/login'
          />
        )
      }
    />
  );
}

export default PrivateRoute;

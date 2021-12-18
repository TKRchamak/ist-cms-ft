import React, { useContext } from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import { userContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const [loginUser, setLoginUser] = useContext(userContext)

    return (
        <Route
      {...rest}
      render={({ location }) =>
      loginUser.email ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;
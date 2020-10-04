import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { DestinationContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const [loggedInUser, setLoggedInUser] = useContext(DestinationContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                        <Redirect
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
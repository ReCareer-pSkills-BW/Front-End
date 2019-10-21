import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// React 2 stuff, feel free to check it out

const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Route 
            {...rest} 
            render={ props => {
                if(localStorage.getItem('token')){
                     return <Component {...props} />
                } else{
                     return <Redirect to="/" />
                }
           }}
      />
 )
};

export default PrivateRoute;

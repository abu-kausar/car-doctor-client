import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <h1 className='text-txl'>Loading..</h1>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
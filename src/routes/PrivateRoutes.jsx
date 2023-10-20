import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    // Check Loading
    if(loading){
        return <div className='absolute w-full bg-white dark:bg-gray-900 z-50 h-full flex justify-center items-center'>
            <span className="loading loading-ring w-20 text-brand-primary dark:text-yellow-400"></span>
        </div>
    }

    // Check User
    if(user){
        return children;
    }

    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoutes;
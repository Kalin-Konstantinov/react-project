import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';



const Logout = () => {
    const navigate = useNavigate();
    const {  deleteUserData } = useAuthContext();

    useEffect(() => {
        deleteUserData();
        navigate('/');
    }, [deleteUserData, navigate]);

    return null;
}

export default Logout;
import { useContext, createContext, useState } from 'react';

const AuthContext = createContext();

const userInitialValue = {
    _id: null,
    name: null,
    email: null,
    accessToken: null
}

export const AuthContextProvider = ({
    children
}) => {
    const [state, setState] = useState(userInitialValue);

    const saveUserData = (userData = {}) => {
        setState(userData);
    }

    const deleteUserData = () => {
        setState(userInitialValue);
    }

    return (
        <AuthContext.Provider value={{ user: state, saveUserData, deleteUserData }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);
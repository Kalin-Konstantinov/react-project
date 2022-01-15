import { useContext, createContext, useState, useEffect } from 'react';

const USER_STRING = 'user';

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

    useEffect(() => {
        const userDataString = localStorage.getItem(USER_STRING);
        const userData = JSON.parse(userDataString) || userInitialValue;
        setState(userData);
    }, []);

    const safeUserDataToLocalStorage = (data) => {
        const jsonFormatData = JSON.stringify(data);
        localStorage.setItem(USER_STRING, jsonFormatData);
    }

    const removeUserDataToLocalStorage = () => {
        const jsonFormatData = JSON.stringify(userInitialValue);
        localStorage.setItem(USER_STRING, jsonFormatData);
    }

    const saveUserData = (userData = {}) => {
        safeUserDataToLocalStorage(userData);
        setState(userData);
    }

    const deleteUserData = () => {
        removeUserDataToLocalStorage();
        setState(userInitialValue);
    }

    return (
        <AuthContext.Provider value={{ user: state, saveUserData, deleteUserData }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);
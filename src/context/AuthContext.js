import React, {createContext, useState} from 'react';


const AuthContext = createContext();
const {Provider} = AuthContext;


const AuthProvider = ({children}) => {

    const token = localStorage.getItem('token');
    const userInfo = localStorage.getItem('userInfo');
    const expiresAt = localStorage.getItem('expiresAt');


    const [authState, setAuthState] = useState({
        token,
        expiresAt,
        userInfo: userInfo ? JSON.parse(userInfo) : {}
    })

    const setAuthInfo = ({token, expiresAt, userInfo}) => {
        localStorage.setItem('token', token);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        localStorage.setItem('expiresAt', expiresAt);

        setAuthState({
            token,
            userInfo,
            expiresAt
        })
    }

    const isAuthenticated = () => {
        if (!authState.token || !authState.expiresAt) {
            return false;
        }
        return true;
    }

    return (
        <Provider value={{
            authState,
            isAuthenticated,
            setAuthState: authInfo => setAuthInfo(authInfo)
        }}>
            {children}
        </Provider>
    )
}

export {AuthContext, AuthProvider};

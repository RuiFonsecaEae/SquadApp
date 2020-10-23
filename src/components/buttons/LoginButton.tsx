import React, { useState } from 'react';
import { Login } from '../containers/Login';

export interface LoginInterface {
    logged: boolean;
}

export const LoginButton: React.FC<LoginInterface> = ({ logged }) => {
    const [loginState, setLogin] = useState(false);

    const loginHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event);
        setLogin(true);
    };
    return (
        <>
            {logged ? (
                <button className="login-button" onClick={loginHandler}>
                    Login
                </button>
            ) : (
                <button className="login-button">Logout</button>
            )}
            {loginState && <Login />}
        </>
    );
};
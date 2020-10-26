import React from 'react';

interface LoginInterface {
    logged: boolean;
    setLoginFn: Function;
    loginState: boolean;
}

export const LoginButton: React.FC<LoginInterface> = ({ logged, setLoginFn, loginState }) => {
    return (
        <>
            {logged ? (
                <button className={`login-button ${loginState ? 'active' : ''}`} onClick={() => setLoginFn()}>
                    Login
                </button>
            ) : (
                <button className="login-button">Logout</button>
            )}
        </>
    );
};

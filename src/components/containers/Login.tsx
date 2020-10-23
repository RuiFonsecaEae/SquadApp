import React from 'react';
import './Login.scss';

export const Login: React.FC = () => {
    return (
        <div className="login-container">
            <h3>Login</h3>
            <button className="close-button">
                close
            </button>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="username" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" />
            </div>
            <button>Login</button>
        </div>
    );
};

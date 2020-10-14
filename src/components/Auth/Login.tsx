import React, { FC, useState } from 'react';
import './Login.scss';
import { onLogin } from './Auth.api';

// interface Credentials {
//     username?: string;
//     password?: string;
// }

interface UserCredentials {
    username: string;
    password: string;
}
const Login: FC = () => {
    const [{ username, password }, setState] = useState<UserCredentials>({ username: '', password: '' });

    const setCredentialsHandler = (_type: string, _value: string): void => {
        console.log(_value);
        if (_type !== 'password') {
            setState({
                username: _value,
                password,
            });
        } else {
            setState({
                username,
                password: _value,
            });
        }
    };
    const [error, setError] = useState('');
    const loginHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log('login');
        const response = await onLogin({
            username,
            password,
        });
        if (response && response.error) {
            setError(response.error);
        }
    };
    return (
        <div className="login">
            <form onSubmit={loginHandler}>
                <h3>Login</h3>
                <div className="form-group">
                    <label htmlFor="user-name">User Name</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                            setCredentialsHandler(event.target.type, event.target.value)
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                            setCredentialsHandler(event.target.type, event.target.value)
                        }
                    />
                </div>
                <div className="form-group">
                    <button type="submit">Login </button>
                </div>
                {error.length > 0 && <p>{error}</p>}
            </form>
        </div>
    );
};
export default Login;

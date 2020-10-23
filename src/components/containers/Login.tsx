import React from 'react';
import './Login.scss';

interface Props {
    setLogin: Function;
}

export const Login: React.FC<Props> = ({ setLogin }) => {
    // const closeHandler = (event: React.MouseEvent) => {
    //     console.log(event);
    // }

    // function handleChange(event) {
    //     // Here, we invoke the callback with the new value
    //     props.onChange(event.target.value);
    // }
    return (
        <div className="login-container">
            <h3>Login</h3>
            <button className="close-button" onClick={() => setLogin()}>
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

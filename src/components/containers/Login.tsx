import React, { useState } from 'react';
import './Login.scss';
import { User } from '../../actions/UserActionsTypes';
import { connect, MapStateToPropsParam } from 'react-redux';
import { UsersState } from '../../reducers/UsersReducer';

interface OwnProps {}

export interface ConnectedProps {
    users?: User[];
}

interface Props {
    setLogin: Function;
    users?: User[];
}

const Login: React.FC<Props> = ({ setLogin, users }) => {
    console.log('users', users);
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const userHandler = (event: React.ChangeEvent<HTMLInputElement>) => setUser(event.target.value);
    const passHandler = (event: React.ChangeEvent<HTMLInputElement>) => setPass(event.target.value);
    const submitHAndler = () => {
        console.log(user);
        console.log(pass);
        console.log('login submit -> users', users);
    };

    return (
        <div className="login-container">
            <h3>Login</h3>
            <button className="close-button" onClick={() => setLogin()}>
                close
            </button>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="username" onChange={userHandler} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" onChange={passHandler} />
            </div>
            <button onClick={submitHAndler}>Login</button>
        </div>
    );
};
const mapStateToProps: MapStateToPropsParam<ConnectedProps, OwnProps, UsersState> = ({ users }) => ({
    users: users,
});
export default connect(mapStateToProps, null)(Login);

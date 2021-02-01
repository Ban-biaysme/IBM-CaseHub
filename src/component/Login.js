import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Axios from "axios";
// import '../App.css';
import './Login.css';
export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

function Login({setToken, serverURI}) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const login = e => {
        e.preventDefault();

        Axios
            .post(`${serverURI}/login`, {
                username: {username},
                password: {password}
            })
            .then((res) => {
                console.log(serverURI)
                res.data['login'] === 'success' ? setToken('res.data') : alert('Invalid Username or password !!');
            });
    }

    return (
        <div className="ibm-login-main-div">
            <form onSubmit={login}>
                <h1><span className="title">WELCOME TO</span> CASE HUB</h1>
                <div className="ibm-login-form">

                    <div className="nav-buttons">
                        <h5  id="ibm-login-heading">Login to Create Case Study</h5>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="name">User Name:</label>
                            <input placeholder="Please enter user name " onChange={event => {setUsername(event.target.value) }} type="text" className="form-control input" id="name"/>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input placeholder="Please enter password " onChange={event => {setPassword(event.target.value)}} type="password" className="form-control input" id="password"/>
                        </div>
                    </div>

                    <div className="col-lg-12 text-center">
                        <button className="btn btn-primary ibm-login-btn" type="submit"> LOGIN</button>
                    </div>
                </div>

            </form>
        </div>
    )
}



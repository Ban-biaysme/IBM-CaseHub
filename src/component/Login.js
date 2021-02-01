import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Axios from "axios";
// import '../App.css';
 import './Login.css';

export function Login({setToken}) {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login = e=> {
       e.preventDefault();

        Axios.post('http://localhost:3001/login', {
            username: {username},
            password: {password}
        }).then((res) => {
            if(res.data['login'] === 'success') {
                console.log( res.data.login);
                console.log( res.data.uName);
                setToken(res.data.login);
                setUserName(res.data.uName);


            } else {
                alert('Invalid Username or password !!');
            }
        });
    }

    return (
            <div className="ibm-main-div">
                <form onSubmit={login}>
                    <h1> <span className="ibm-form-title"></span> WELCOME TO IBM-iX </h1>

                    <div className="ibm-login-form" >

                        <div className="nav-buttons">
                            <h5  id="ibm-login-sub-heading">Login to Create Case Study</h5>
                        </div>
                        <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="name">User Name</label>
                            <input placeholder="Please enter user name " onChange={event => {setUserName(event.target.value) }} type="text" className="form-control input" id="name"/>
                        </div>
                        </div>

                        <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input placeholder="Please enter password " onChange={event => {setPassword(event.target.value)}} type="password" className="form-control input" id="password"/>
                        </div>
                        </div>

                        <div className="col-lg-12 text-center">
                        <button className="btn btn-primary" id="ibm-login-btn" type="submit">LOGIN</button>
                        </div>
                    </div>

                </form>
            </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

import React, { useContext, useState } from 'react';
import { DestinationContext } from '../../App';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Login.css';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';

const Login = () => {

    const formStyle = {
        border: '1px solid lightgray',
        margin: "auto",
        marginTop: "50px",
        textAlign: "center",
        width: "40%",
        padding: "20px"
    }

    const [newUser, setNewUser] = useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(DestinationContext);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: '',
    });

    initializeLoginFramework();

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false)
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = (event) => {
        let isFieldValid = true;
        console.log(event.target.value, event.target.name);
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (event) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        event.preventDefault();
    }

    return (
        <div>
            <NavigationBar invert={false}></NavigationBar>
            <div className="text-center container">

                {

                    !newUser
                        ? <form onSubmit={handleSubmit} style={formStyle}>
                            <h3 style={{ color: 'black', marginBottom: '2em' }}>Login Form</h3>
                            <div className="form-group">
                                <input type="text" className="form-control" name="email" placeholder="Username or Email" onBlur={handleBlur} required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password" onBlur={handleBlur} required />
                            </div>
                            <div className="row justify-content-between">
                                <div className="form-check col-5">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                </div>
                                <div className="col-5">
                                    <a href="">Forgot Password</a>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-warning" style={{ width: "100%", marginTop: "1em" }}>Login</button>
                            <p style={{ color: 'black', marginTop: '1em' }}>Don't have an account? <span><a href="#" onClick={() => setNewUser(!newUser)}>Create an account</a></span></p>
                        </form>

                        : <form onSubmit={handleSubmit} style={formStyle}>
                            <h3 style={{ color: 'black', marginBottom: '2em' }}>Create an account</h3>
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" placeholder="First Name" onBlur={handleBlur} required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="lastName" placeholder="Last Name" onBlur={handleBlur} required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="email" placeholder="Username or Email" onBlur={handleBlur} required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password" onBlur={handleBlur} required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" onBlur={handleBlur} required />
                            </div>
                            <button type="submit" class="btn btn-warning" style={{ width: "100%", marginTop: "1em" }}>Create an account</button>
                            <p style={{ color: 'black', marginTop: '1em' }}>Already have an account? <span><a href="#" onClick={() => setNewUser(!newUser)}>Login</a></span></p>
                        </form>

                }

                <hr />
                <button style={{ backgroundColor: 'white', border: '1px solid lightgray', borderRadius: "10px", width: " 20em", marginBottom: "1em" }} onClick={googleSignIn}>Continue With Google</button>
                <br />
                <button style={{ backgroundColor: 'white', border: '1px solid lightgray', borderRadius: "10px", width: " 20em" }} onClick={fbSignIn}>Continue With Facebook</button>
            </div>
        </div>
    );
};

export default Login;
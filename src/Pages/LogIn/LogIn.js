import React from 'react';
import './LogIn.css';
import google from './../../icon/google.png';
import gitHub from './../../icon/github.jpg';
import useAuth from '../../hooks/useAuth';
import { NavLink, useLocation, useHistory } from 'react-router-dom';

const LogIn = () => {
    const { signInUsingGoogle, signInUsingGitHub, signInUsingEmailPassword, error, handleEmailRegister, handlePasswordRegister } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleEmailLogIn = () => {
        signInUsingEmailPassword()
            .then(result => {
                history.push(location.state?.from || '/home');
            })
    }
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(location.state?.from || '/home');
            })
    }
    const handleGithubLogIn = () => {
        signInUsingGitHub()
            .then(result => {
                history.push(location.state?.from || '/home');
            })
    }
    return (
        <div className="login">
            <div className=' login-form'>
                <div className='box-border h-400 w-80 p-4 border-4 rounded-lg'>
                    <h1 className='text-2xl'>Please Log in</h1>
                    <br />
                    <form className='mt-5 fs-5'>
                        <div className="form-group">
                            <label for="exampleInputEmail1 fs-1">Email address</label>
                            <input onBlur={handleEmailRegister} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1 fs-1">Password</label>
                            <input onBlur={handlePasswordRegister} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                        </div>
                        <div><small className='bg-yellow-400'>{error}</small></div>
                        <br />
                        <button onClick={handleEmailLogIn} type="submit" className="btn btn-primary">Log in</button>
                    </form>
                    <div className='pt-2 text-white'>
                        -------------------------
                        <p className='text-xl bg-yellow-400 rounded-full'>Sign in With </p>
                        <button onClick={handleGoogleLogIn} className='p-3.5'><img style={{ color: 'green', height: '40px' }} src={google} alt="" /></button>
                        <button onClick={handleGithubLogIn} className='p-3.5'><img style={{ color: 'green', height: '40px' }} src={gitHub} alt="" /></button> <br />
                        <NavLink to="/registration">Create An Account</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
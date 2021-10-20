import React from 'react';
import useAuth from '../../hooks/useAuth';
import google from '../../icon/google.png';
import gitHub from '../../icon/github.jpg';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    const { signInUsingGitHub, signInUsingGoogle, handleEmailRegister, handlePasswordRegister, handleRegitration, error } = useAuth();
    return (
        <div className=' login-form'>
            <div className='box-border h-400 w-80 p-4 border-4 rounded-lg'>
                <h1 className='text-2xl'>Please Sign Up</h1>
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
                    <button onClick={handleRegitration} type="submit" className="btn btn-primary">Submit</button>
                </form>

                <h3 className='text-xl mt-3 bg-yellow-400 rounded-full'>Create an account with</h3>
                <button onClick={signInUsingGoogle} className='p-3.5'><img style={{ color: 'green', height: '40px' }} src={google} alt="" /></button>
                <button onClick={signInUsingGitHub} className='p-3.5'><img style={{ color: 'green', height: '40px' }} src={gitHub} alt="" /></button> <br />
                <NavLink to="/login" className='text-white'>Already a Member? Please Log in</NavLink>
            </div>
        </div>
    );
};

export default Registration;
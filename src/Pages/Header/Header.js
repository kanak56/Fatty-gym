
import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div className='text-red-400 p-4 header'>
            <div style={{ fontFamily: 'Italianno', fontSize: '80px' }} className=' text-green-900'>
                Fatty's Gym
            </div>
            <div >

                {/* <NavLink className='p-4 text-2xl' to='/home'>Home</NavLink>
                <NavLink className='p-4 text-2xl' to='/services'>Services</NavLink>
                <NavLink className='p-4 text-2xl' to='/experts'>Experts</NavLink>
                {user.providerData ? <Button className='p-4 text-2xl' onClick={logOut}>Log Out</Button> : <NavLink className='p-4 text-2xl' to='/login'>Login</NavLink>}
                <span style={{ fontFamily: 'Italianno' }}>{user?.displayName}</span> */}
                <div className="collapse navbar-expand-lg" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4 navbar-nav me-auto mb-2 mb-lg-0 ">
                        <NavLink className='p-4 text-2xl' to='/'>Home</NavLink>
                        <Nav.Link className='p-4 text-2xl' to='/services/:serviceId'>Services</Nav.Link>
                        <NavLink className='p-4 text-2xl' to='/gallery'>Gallery</NavLink>
                        <NavLink className='p-4 text-2xl' to='/equipments'>Equipments</NavLink>
                        {user.providerData ? <Button className='p-4 text-2xl' onClick={logOut}>Log Out</Button> : <NavLink className='p-4 text-2xl' to='/login'>Login</NavLink>}
                        <span style={{ fontFamily: 'Italianno', marginLeft: '5%', fontSize: '40px' }}>{user?.displayName}</span>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>

            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../icon/footer.jpg';

const Footer = () => {
    return (
        <div className='mt-4'>
            <div className="card bg-dark">
                <div className="card-header">
                    <h5 className="card-title text-white fs-3">Fatty Gym</h5>

                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img className='w-40' src={img} alt="" />
                </div>
                <div className="card-body">

                    <p className="card-text text-white">Feel Free to Contact Us</p>
                    <a href="#" className="btn btn-primary">fattysgym.info</a>
                    <small className="text-white"> <br />
                        &copy; All rights are Reserved by Kanak Chakma</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;
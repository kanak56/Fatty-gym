import React from 'react';
import { NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const { description, name, img, shortDescription } = props.service;

    return (
        <div>
            <div className="col" id='services'>
                <div className="card importants">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>{shortDescription}</p>
                        <NavLink to={`/services/:${description}/:${name}`} className='bg-black btn text-white rounded-lg'><button>Get This</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
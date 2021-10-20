import React from 'react';
import { useParams } from 'react-router';

const ServicesDetails = () => {
    const { description, name, img } = useParams();
    return (
        <div className='text-white bg-dark'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img style={{ width: '300px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLddRZ4uQWY7IV6GMJSvpHk8vIDrP3o14Xg&usqp=CAU' alt="" />
            </div>
            <h1>You have just taken this service.</h1>
            <h1>Service Information Are Given Bellow:</h1>
            <h1>{name}</h1>
            <h3>{description}</h3>
            <img src={img}></img>
        </div>
    );
};

export default ServicesDetails;
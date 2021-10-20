import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('servicesFakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div id="services">
            <h1 className='text-white fs-1'>Our Services</h1>
            <div style={{ width: '100%' }} className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    services.map(service => <Service
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;
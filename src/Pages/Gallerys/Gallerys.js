import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import Gallery from './Gallery/Gallery';

const Gallerys = () => {
    const [gallerys, setGallerys] = useState([]);
    useEffect(() => {
        fetch('servicesFakeData.json')
            .then(res => res.json())
            .then(data => setGallerys(data))
    }, []);
    return (
        <div>
            <h1>Fatty Gym Gallery</h1>
            <Row style={{ width: '100%' }} xs={1} md={3} className="g-4">
                {
                    gallerys.map(gallery => <Gallery
                        key={gallery.id}
                        img={gallery.img}
                    ></Gallery>)
                }
            </Row>
        </div>
    );
};

export default Gallerys;
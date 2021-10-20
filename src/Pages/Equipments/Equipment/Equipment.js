import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';

const Equipment = (props) => {
    const { heading, img } = props;
    return (
        <Col className='col-12 col-md-3'>
            <Card className='importants'>
                <Card.Title>{heading}</Card.Title>
                <img src={img} style={{ width: '100%', height: '400px' }} alt="" />
            </Card>
        </Col>
    );
};

export default Equipment;
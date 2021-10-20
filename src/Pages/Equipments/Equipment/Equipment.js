import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';

const Equipment = (props) => {
    const { heading, img } = props;
    return (
        <Col>
            <Card className='importants'>
                <Card.Title>{heading}</Card.Title>
                <img src={img} style={{ width: '100%', height: '400px' }} alt="" />
            </Card>
        </Col>
    );
};

export default Equipment;
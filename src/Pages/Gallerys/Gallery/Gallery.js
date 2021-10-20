import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Gallery = (props) => {
    const { img } = props;
    return (


        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
            </Card>
        </Col>


    );
};

export default Gallery;
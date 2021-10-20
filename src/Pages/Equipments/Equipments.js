import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Equipment from './Equipment/Equipment';

const Equipments = () => {
    const [equipments, setEquipments] = useState([]);
    useEffect(() => {
        fetch('fakeEquip.json')
            .then(res => res.json())
            .then(data => setEquipments(data));
    }, []);
    return (
        <div>
            <div className='row ' style={{ width: '100%' }}>
                {
                    equipments.map(equipment => <Equipment
                        key={equipment.id}
                        heading={equipment.heading}
                        img={equipment.img}
                    ></Equipment>)
                }
            </div>
        </div>
    );
};

export default Equipments;
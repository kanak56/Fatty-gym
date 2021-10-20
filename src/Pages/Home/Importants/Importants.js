import React from 'react';

const Importants = (props) => {
    const { name, description } = props;
    return (
        <div>
            <div >
                <div className="card importants">
                    <div className="card-body">
                        <h5 className="card-title bg-dark text-white">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Importants;
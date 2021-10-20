import React from 'react';

const Experts = (props) => {
    const { heading, img, price } = props.expert;
    return (
        <div class="col-sm">
            <div className="card-deck" >
                <div className="card importants">
                    <img style={{ height: '300px' }} className="card-img-top" src={img} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{heading}</h5>
                        <p className="card-text"><small className="text-white ">Price:{price}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experts;
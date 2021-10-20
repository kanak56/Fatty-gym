import React, { useEffect, useState } from 'react';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Importants from './Importants/Importants';
import './Home.css';

const Home = () => {
    const [importants, setImportants] = useState([]);
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('importantsFakeData.json')
            .then(res => res.json())
            .then(data => setImportants(data))
    }, []);
    useEffect(() => {
        fetch('expertsFakeData.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, []);
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide pt-4" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='https://images.firstpost.com/wp-content/uploads/2020/07/gym-shutterstock-640.jpg' className="d-block w-100" style={{ width: '100%', height: '650px' }} alt="..." />
                        <div className="carousel-caption text-black fs-2 d-none d-md-block">
                            <h5>Are you fat?</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.muscleandfitness.com/wp-content/uploads/2019/10/Overweight-Man-Sitting-Down-At-Bench.jpg?quality=86&strip=all" className="d-block w-100" style={{ width: '100%', height: '650px' }} alt="..." />
                        <div className="carousel-caption text-white fs-2 d-none d-md-block">
                            <h5>Want to reduce your fat?</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.lifehack.org/wp-content/uploads/2018/08/how-long-does-it-take-to-build-muscle-1024x768.jpeg" className="d-block w-100" style={{ width: '100%', height: '650px' }} alt="..." />
                        <div className="carousel-caption text-black fs-2 d-none d-md-block">
                            <h5>Then Take A short tour of our website to know how you can get your goal.</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='container'>
                <h1 style={{ fontFamily: 'Italianno' }} >Welcome To</h1>
                <h1 style={{ fontFamily: 'Italianno', fontSize: '100px', width: '100%' }} >Fatty's Gym</h1>
            </div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1 className='bg-dark text-white' style={{ width: '50%', height: '8rem', padding: '10px' }}>Why Excercise is Important</h1>
                </div>
                <div style={{ width: '100%' }} className="row mt-4 row-cols-1 row-cols-md-3 g-4 ">
                    {
                        importants.map(important => <Importants
                            key={important.id}
                            name={important.heading}
                            description={important.description}></Importants>)
                    }
                </div>
            </div>

            <Services ></Services>
            <h1 className='text-white fs-1'>Our Trainers</h1>
            <div id='experts' className="row mt-4" style={{ width: '100%' }}>
                {
                    experts.map(expert => <Experts
                        key={expert.id}
                        expert={expert}></Experts>)
                }
            </div>
        </div >
    );
};

export default Home;
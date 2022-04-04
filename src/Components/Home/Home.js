import React from 'react';
import './Home.css';
import Airpods from '../../Assets/Images/airpods-pro_1.jpg';
const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-preview'>
                <div className='heading'>
                    <h1>A magical connection to your devices</h1>
                    <h3>Spatial audio with
                        dynamic head tracking</h3>
                    <p>AirPods Pro are the only in-ear headphones with Active Noise Cancellation that continuously adapts to the geometry of your ear and the fit of the ear tips — blocking out the world so you can focus on what you're listening to.</p>
                    <button>Live Demo</button>
                </div>
                <div className='image-container'>
                    <img src={Airpods} alt="" />
                </div>
            </div>
            <div className='review-container'>
                <h2>Our Customer Reviews</h2>
            </div>
        </div>
    );
};

export default Home;
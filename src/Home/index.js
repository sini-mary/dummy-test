import React from "react";
import './style.css';

const Home = () => {
    return (
        <div className="body">
            <nav>
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/product">Our product</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className="farm">
                <img src={process.env.PUBLIC_URL + '/images/farm.jpg'} alt="Farm" />
                <div className="overlay"></div>
                <h1 className="words">Healthy Living & <span>Quality Farming</span></h1>
            </div>

        </div>
        
    );
}

export default Home;
import React from 'react';
import Logo from '../../public/images/logo-1.png';

const Home = () => {
    return(
        <div id="home">
            <div className="background"></div>
            <img src={Logo} id="logo"></img>
            <p>Digital marketing, web development and much more...</p>
            <h3 id="services-header">SERVICES</h3>
        </div>
    )
}

export default Home;

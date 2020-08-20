import React from 'react';
import Logo from '../../public/images/logo-1.png';


const Home = () => {     

    return(
        <div id="home">
            <div className="background"></div>
            <img src={Logo} id="logo"></img>
            <h1>
            </h1>
            <h3 id="services-header">SERVICES</h3>
        </div>
    )
}

export default Home;

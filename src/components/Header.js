import React from 'react';
import Logo from '../../public/images/logo-2.png';


const Header = () => {
    return (
        <header>
            <img src={Logo} id="header-logo"/>
            <div id="navlinks">
            <h4>Home</h4>
            <h4>Services</h4>
            <h4>Contact us</h4>
            </div>
        </header>
    )
}

export default Header;
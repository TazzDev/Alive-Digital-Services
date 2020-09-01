import React from 'react';
import Logo from '../../public/images/footer-logo.png';
import BurgerMenu from './BurgerMenu';


const Header = () => {
    return (
        <header>
            <div id="header-start">
            <img src={Logo} id="header-logo"/><h3>Alive Digital Services</h3>
            </div>
            <BurgerMenu/>
            <div id="navlinks">
                <a href="/">Home</a>
                <a href="#services">Services</a>
                <a href="#about">Our Story</a>
                <a href="#contact-us">Contact Us</a>
            </div>
        </header>
    )
}

export default Header;
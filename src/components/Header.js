import React from 'react';
import Logo from '../../public/images/footer-logo.png';
import BurgerMenu from './BurgerMenu';


const Header = () => {
    return (
        <header>
            <img src={Logo} id="header-logo"/>
            <BurgerMenu/>
        </header>
    )
}

export default Header;
import React from 'react';
import Logo from '../../public/images/footer-logo.png';
import AOS from 'aos';

const Contact = () => {
    AOS.init();
    return (
        <div id="contact-us">
            <div id="contact-title" data-aos="fade-down"  data-aos-duration="1500">
                <h3 style={{textDecoration:"underline"}}>CONTACT</h3>
                <img src={Logo} id="contact-logo"/>
                <h3>TEAM</h3>
            </div>
            <h6>Phone : +91-8179312708</h6>
        </div>
    )
}

export default Contact;
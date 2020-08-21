import React from 'react';
import Logo from '../../public/images/footer-logo.png';
import AOS from 'aos';

const Contact = () => {
    AOS.init();
    return (
        <div id="contact-us" data-aos="fade-down">
            <div id="contact-title">
                <h3>Contact the </h3>
                <img src={Logo} id="contact-logo"/>
                <h3>team</h3>
            </div>
            <h6>Phone : +91-8179312708</h6>
        </div>
    )
}

export default Contact;
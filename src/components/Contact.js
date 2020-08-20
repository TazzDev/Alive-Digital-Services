import React from 'react';
import Logo from '../../public/images/footer-logo.png';

const Contact = () => {
    return (
        <div id="contact-us">
            <div id="contact-title">
                <h3>Contact the </h3>
                <img src={Logo} id="contact-logo"/>
                <h3>team</h3>
            </div>
            <h6>+919573157416</h6>
        </div>
    )
}

export default Contact;
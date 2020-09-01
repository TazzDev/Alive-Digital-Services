import React from 'react';
import Logo from '../../public/images/footer-logo.png';
import AOS, { init } from 'aos';

const Contact = () => {
    AOS.init();
    return (
        <div id="contact-us">
            <div id="contact-title" data-aos="fade-down"  data-aos-duration="1500">
                <h3 style={{textDecoration:"underline"}}>CONTACT</h3>
                <img src={Logo} id="contact-logo"/>
                <h3>TEAM</h3>
            </div>
            <form id="contact-form" action="https://formsubmit.co/tz.marketing1@gmail.com" target="_blank" method="POST" >
                {/* <iframe name="hForm" style={{display:"none"}}/> */}

                <div className="formgroup">
                <label for="name" id="fname">Name:</label>
                <input id="name" name="name" type="text" required/>

                <label for="email" id="femail">Email:</label>
                <input id="email" name="email" type="email" required/>
                </div>

                <button type="submit" id="submitbtn">SUBMIT</button>

                <div className="formgroup">
                <label for="name" id="fname">Phone:</label>
                <input id="name" name="name" type="tel"/>

                <label for="email" id="femail">Business Query:</label>
                <input id="query" name="email" type="text"/>
                </div>
            </form>
        </div>
    )
}

export default Contact;
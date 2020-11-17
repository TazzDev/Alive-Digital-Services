import React from 'react';
import CEO from '../../public/images/ceo.png';
import AOS from 'aos';


class About extends React.Component{

    constructor(props) {
        super(props);
        AOS.init();
    }

    componentDidMount() {
        AOS.refresh();
    }

    render(){
        return (
        <div  id="about">
            <div className="background-mtg-bg"></div>
            <h3 data-aos="fade-in" data-aos-duration="1500"><u>OUR STORY</u></h3>
            {/* <img src={CEO} id="founder-image" data-aos="fade-in" data-aos-duration="1500"></img>
            <p id="founder-name">CEJO ALPHONSE</p><p id="founder-details">Business Head - North America & India</p> */}
            <p id="founder-desc" data-aos="fade-in" data-aos-duration="1500">
            Every Business starts locally and then expands Internationally. But, for us it was quite the opposite.<br/><br/>
            Starting from USA partnering up with Alive Corps LLC (a registered IT firm), we started out with just one client. 
            We have significantly grown and now we want to setup base helping Indian Businesses achieve their goals too, 
            although having our home company in the US.<br/><br/>
            {/* <b>Cejo Alphonse</b> is an innovative young man who took all his skills which have been developed over the years of 
            work into all segments possible. He has been working from a very young age nurturing and sharpening skills overtime.<br/><br/> */}
            It is always a thought of having something on our own that drives young men and it is something I always wanted to have. 
            My God graciously answered my prayers and gave me something of my own and as a cherry to the cake, also gave me an opportunity 
            to help people like me who nurtured their business as their own child.<br/><br/>
            Trained by the best in the segment, we have expertise that can help your business with the best strategies possible.
            <br/><br/>
            Eventually growing our team and acquiring people with new sets of skills we have evolved into what we are today – <b>“One Stop Shop for 
            Businesses to make a mark in the Digital World”</b><br/><br/>
            <b>We work not because that’s something we have to do, but because it is something we want to do and that’s what makes us who we are.</b>
            <p id="footnote"><b>Cejo Alphonse<br/>CEO - Alive Digital Services</b></p>
            </p>
            
        </div>
    )
    }
}

export default About;
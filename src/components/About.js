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
            <h3 data-aos="fade-in" data-aos-duration="1500">OUR STORY</h3>
            {/* <img src={CEO} id="founder-image" data-aos="fade-in" data-aos-duration="1500"></img>
            <p id="founder-name">CEJO ALPHONSE</p><p id="founder-details">Business Head - North America & India</p> */}
            <p id="founder-desc" data-aos="fade-in" data-aos-duration="1500">
            Every Business starts locally and then expands Internationally. But, for us it was quite the opposite.<br/><br/>
            Starting from USA partnering up with Alive Corps LLC (a registered IT firm), we started out with just one client. 
            We have significantly grown and now we want to setup base helping Indian Businesses achieve their goals too, 
            although having our home company in the US.<br/><br/>
            <b>Cejo Alphonse</b> is an innovative young man who took all his skills which have been developed over the years of 
            work into all segments possible. He has been working from a very young age nurturing and sharpening skills overtime.<br/><br/>
            It was always a thought of having something on his own that drove this young man and something he constantly prayed for. 
            His God answered his prayers and gave him something of his own and as a cherry to the cake, also gave him an opportunity 
            to help people like him who nurtured their business as their own child. Today he is one of the youngest Business Heads in 
            India.<br/><br/>
            Trained by the creators of Digital Marketing itself, we have expertise that can help your business with the Best Strategies possible.
            <br/><br/>
            Eventually growing our team and acquiring people with new sets of skills we have evolved into what we are today – <b>“One Stop Shop for 
            Businesses to make a mark in the Digital World”</b><br/><br/>
            <b>We work not because that’s something we have to do, but because it is something we want to do and that’s what makes us who we are.</b>
            </p>
        </div>
    )
    }
}

export default About;
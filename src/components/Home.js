import React from 'react';
import Typist from 'react-typist';


const Home = () => {     

    return(
        <div id="home">
            <div className="background"></div>
            <h3 id="htitle">We believe in working with our clients with
            utmost</h3>
            <Typist cursor={{blink:true,element:"_"}} className="my-typist">
                <span className="bigger">P</span>ASSION<br/><span className="bigger">O</span>WNERSHIP<br/><span className="bigger">W</span>ISDOM 
                <br/><span className="bigger">E</span>XPERTISE<br/><span className="bigger">R</span>ESPONSIBILITY
            </Typist>
            <h3 id="hcard">Portraying your ideas as the best in the segment and the face of your business in the digital world<br/>
                As every DROP makes an OCEAN, we believe every IDEA makes a DIFFERENCE.</h3>
        </div>
    )
}

export default Home;

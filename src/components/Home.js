import React from 'react';
import Logo from '../../public/images/logo-1.png';
import Typist from 'react-typist';


const Home = () => {     

    return(
        <div id="home">
            <div className="background"></div>
            {/* <h1>
            <img src={Logo} id="logo"></img>
            </h1> */}
            <img src={Logo} id="logo"/> <h3>believe in working with our clients with
            utmost
            </h3>
            <Typist cursor={{blink:true,element:"_"}} startDelay={2000} className="my-typist">
                PASSION<Typist.Backspace count={7} delay={1000} /> &nbsp;OWNERSHIP<Typist.Backspace count={10} delay={1000} /> WISDOM 
                <Typist.Backspace count={6} delay={1000} /> EXPERTISE<Typist.Backspace count={10} delay={1000} /> &nbsp;RESPONSIBILITY
            </Typist>
            <h3 id="hcard">Portraying your ideas as the best in the segment and the face of your business in the digital world</h3>
        </div>
    )
}

export default Home;

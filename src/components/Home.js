import React from 'react';
import Logo from '../../public/images/logo-1.png';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        setTimeout(()=>{
            document.getElementById('roll-text').textContent = "Web dev";
        },3000)
        setTimeout(()=>{
            document.getElementById('roll-text').textContent = "Digi Mark";
        },3000)
        
    }

    render() {
    return(
        <div id="home">
            <div className="background"></div>
            <img src={Logo} id="logo"></img>
            <p id="roll-text">Digital marketing</p>
            <h3 id="services-header">SERVICES</h3>
        </div>
    )}
}

export default Home;

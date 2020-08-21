import React from 'react';
import Burger from '../../public/images/menu.png';
import Close from '../../public/images/close.png';




class BurgerMenu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpened: false,
        };
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen(e) {
        if (this.state.isOpened) {
        this.setState({
            isOpened: false,
        })
        document.getElementById('bmenu').setAttribute('src',Burger)
    } else {
        this.setState({
            isOpened: true,
        })
        document.getElementById('bmenu').setAttribute('src',Close)
    }

    }

    render() {
        return(
            <div>
                <img src={Burger} id="bmenu" onClick={this.toggleOpen}/>
                {this.state.isOpened ? 
                            <div id="mform">
                                <div id="navlinks">
                                    <a href="/" className="nav-a" onClick={this.toggleOpen}>Home</a>
                                    <a href="#services" className="nav-a" onClick={this.toggleOpen}>Services</a>
                                    <a href="#about" className="nav-a" onClick={this.toggleOpen}>Meet the One</a>
                                    <a href="#contact-us" className="nav-a" onClick={this.toggleOpen}>Contact Us</a>
                                </div>
                            </div> 
        : ''}
            </div>
        )
    }
}

export default BurgerMenu
import React from 'react';

class Card extends React.Component { 
    constructor(props) {
        super(props);
        this.state ={
            hovered: false,
        }
        this.changeHover = this.changeHover.bind(this);
        this.exitHover = this.exitHover.bind(this);
    }

    changeHover(e) {
        const desc = document.createElement('div');
        desc.innerHTML = this.props.content;
        desc.setAttribute('id','desc');
        e.target.appendChild(desc);
    }

    exitHover(e) {
        console.log(e.target.childNodes[1])
        e.target.removeChild(e.target.childNodes[1]);
    }


    render() {
        return (
            <div className="card" onMouseEnter={this.changeHover} onMouseLeave={this.exitHover}>
                {this.props.header}
            </div>
        )
    }
}

export default Card;
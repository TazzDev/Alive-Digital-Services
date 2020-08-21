import React from 'react';

class Card extends React.Component { 
    constructor(props) {
        super(props);
        this.state ={
            clicked: false,
        }
        this.changeHover = this.changeHover.bind(this);
    }

    changeHover(e) {
        if (!this.state.clicked) {
        const desc = document.createElement('div');
        desc.innerHTML = this.props.content;
        desc.setAttribute('id','desc');
        e.target.appendChild(desc);
        console.log(e.target.parentNode)

        this.setState({
            clicked: true,
        })
        } else {
            for (let i = 0; i < e.target.childNodes.length; i++) {
                if(e.target.childNodes[i].id === 'desc') {
                console.log(e.target.childNodes[i])
                e.target.removeChild(e.target.childNodes[i]);
             }
                    //e.target.removeChild(e.target.childNodes[i]);
            }
            this.setState({
                clicked: false,
            })
        }
    }

    render() {
        return (
            <div className="card" >
                <div className="innerCard">
                <img src={this.props.src} className="serv-icon"/>
                <h3>{this.props.header}</h3>
                </div>
                <p onClick={this.changeHover}>Click here to know more</p>
            </div>
        )
    }
}

export default Card;
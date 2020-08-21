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
        <div className="background-mtg-bg" id="about">
            <h3 data-aos="fade-in" data-aos-duration="4000">MEET THE ONE!</h3>
            <img src={CEO} id="founder-image" data-aos="fade-in"></img>
            <p id="founder-desc" data-aos="fade-in">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisi tellus, 
            hendrerit id arcu ac, eleifend finibus neque. Aliquam erat volutpat. 
            Fusce quam mi, consectetur eget mollis ac, blandit at est. Nam ornare dui erat, 
            ac mattis nunc tempus a. Maecenas eu pulvinar nisi, a efficitur neque. Nullam 
            venenatis odio ac arcu ultrices euismod. Donec ultricies velit ut ligula bibendum, 
            vel bibendum lectus viverra. In blandit faucibus nisl, in venenatis turpis cursus 
            at. Ut vel maximus velit, eu tincidunt nunc. Nam iaculis dignissim massa a feugiat. 
            In bibendum, ex vitae tristique bibendum, libero erat imperdiet mi, et bibendum sem 
            metus quis odio. Sed nec vulputate diam. Curabitur porttitor ac risus vitae ultricies. 
            Praesent suscipit enim orci, suscipit scelerisque lorem ultrices eu. Curabitur nec tempus velit. 
            </p>
        </div>
    )
    }
}

export default About;
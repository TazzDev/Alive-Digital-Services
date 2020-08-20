import React from 'react';
import CEO from '../../public/images/ceo.png';

const About = () => {
    return (
        <div className="background-mtg-bg">
            <h3>MEET THE ONE!</h3>
            <img src={CEO} id="founder-image"></img>
            <p id="founder-desc">
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

export default About;
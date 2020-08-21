import React from 'react';
import WebDev from '../../public/images/web-dev.png';
import Card from './Card';
import AOS from 'aos';

// const XServices = () => {
//     return (
//         <div id="services">

//             <div id="digital-marketing">

//                 <h3>Digital Marketing</h3>

//                 <Card header="Digital marketing content" content="Yollo"/>
//                 <Card header="Digital marketing content" content="Yollo"/>
//                 <Card header="Digital marketing content" content="Yollo"/>
//                 <Card header="Digital marketing content" content="Yollo"/>




//             </div>
//             <hr style={{margin:"2% 0 0 0",height:"80%"}}/>
//             <div id="web-dev">

//                 <h3>Web Development</h3>

//                 <Card header="Portfolio Website Development" content="Hello"/>
//                 <Card header="Portfolio Website Development" content="Hello"/>
//                 <Card header="Portfolio Website Development" content="Hello"/>
//                 <Card header="Portfolio Website Development" content="Hello"/>




//             </div>

//         </div>
//     )
// }


const Services = () => {

    AOS.init();

    return (
        <React.Fragment>
        <section id="services-header">Services</section>
        <h3 id="serv-subt">Best in class one stop shop for your business to make a mark in the digital world!</h3>
        <div id="services">

            <div id="digital-marketing" data-aos="fade-up">
                <Card data-aos="fade-up" src={WebDev} header="Web development" content="Get custom made websites suited to your own design"/>
                <Card src={WebDev} header="Web development" content="Get custom made websites suited to your own design"/>
                <Card src={WebDev} header="Web development" content="Get custom made websites suited to your own design"/>
                <Card src={WebDev} header="Web development" content="Get custom made websites suited to your own design"/>
            </div>

            <div id="web-development" data-aos="fade-up">
                <Card src={WebDev} header="Web development" content="Get custom made websites suited to your own design"/>
                <Card src={WebDev} header="Web development" content="Get custom made websites suited to your own design"/>
                <Card src={WebDev} header="Web development" content="Get custom made websites suited to your own design"/>
                <Card src={WebDev} header="Web development" content="Get custom made websites suited to your own design"/>
            </div>

        </div>
        </React.Fragment>
    )
}

export default Services;
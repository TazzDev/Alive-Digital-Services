import React from 'react';
import WebDev from '../../public/images/web-dev.png';
import Card from './Card';
import AOS from 'aos';

const Services = () => {

    AOS.init();

    return (
        <React.Fragment>
        <section id="services">SERVICES</section>
        <h3 id="serv-subt">Best in class one stop shop for your business to make a mark in the digital world!</h3>
        <div id="services-header">

            <div id="digital-marketing" data-aos="fade-up">
                <Card src={WebDev} header="Web development" content="Get custom made websites suited to your own design"/>
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
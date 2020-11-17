import React from 'react';
import WebDev from '../../public/images/web-dev.png';
import BrandMarketing from '../../public/images/brand-marketing.png';
import PaidAds from '../../public/images/paid-ads.png';
import SocialMedia from '../../public/images/social-media.png';
import BudgetPlanning from '../../public/images/budget-planning.png';
import SEO from '../../public/images/seo.png';
import MarketingStrategy from '../../public/images/marketing-strategy.png';
import ContentPlanning from '../../public/images/content-planning.png';
import Ecommerce from '../../public/images/cart.png';
import CustomDesign from '../../public/images/design.png';
import WebSpeed from '../../public/images/website-speed.png';
import Maintenance from '../../public/images/maintenance.png';
import UX from '../../public/images/experience.png';
import Testing from '../../public/images/testing.png';


import Card from './Card';
import AOS from 'aos';

const Services = () => {

    AOS.init();

    return (
        <div id="service-container">
        <section id="services"><u>SERVICES</u></section>
        <h3 id="serv-subt">Best in class one stop shop for your business to make a mark in the digital world!</h3>
        <div id="services-header">


                <Card src={BrandMarketing} header="Brand Marketing" color="#80ff00"/>
                <Card src={PaidAds} header="Paid Advertisements" color="#0b9df4"/>
                <Card src={SocialMedia} header="Social Media Marketing" color="#c53ac5"/>
                <Card src={BudgetPlanning} header="Budget Planning" color="#f40b6f"/>
                <Card src={MarketingStrategy} header="Marketing Strategies & Planning" color="#0ec9bf"/>
                <Card src={SEO} header="Search Engine Optimisation" color="#f91f06"/> {/*Change this red*/}
                <Card src={ContentPlanning} header="Content Planning and Strategies" color="#ffff00"/>

                <Card src={WebDev} header="Web development" color="#f88607"/>
                <Card src={Ecommerce} header="E-commerce development" color="#3e4799"/>
                <Card src={CustomDesign} header="Custom design" color="#ff80ff"/>
                <Card src={WebSpeed} header="Web page optimization & fast renders" color="#80ff00"/>
                <Card src={Maintenance} header="Web page maintenance" color="#f40b6f"/>
                <Card src={UX} header="Positive user experience" color="#0b9df4"/>
                <Card src={Testing} header="Server Load Testing & Integration Testing" color="#c53ac5"/>
                <Card src={Testing} header="Codebase Revision" color="#ffff00"/>
                <Card src={Testing} header="Market Research & Consulting" color="#f91f06"/>
                

        </div>
        </div>
    )
}

export default Services;
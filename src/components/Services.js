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
        <React.Fragment>
        <section id="services">SERVICES</section>
        <h3 id="serv-subt">Best in class one stop shop for your business to make a mark in the digital world!</h3>
        <div id="services-header">

            <div id="digital-marketing" data-aos="fade-up">
                <Card src={BrandMarketing} header="Brand Marketing" content="Get custom made websites suited to your own design"/>
                <Card src={PaidAds} header="Paid Advertisements" content="Get custom made websites suited to your own design"/>
                <Card src={SocialMedia} header="Social Media Marketing" content="Get custom made websites suited to your own design"/>
                <Card src={BudgetPlanning} header="Budget Planning" content="Get custom made websites suited to your own design"/>
                <Card src={MarketingStrategy} header="Marketing Strategies & Consulting" content="Get custom made websites suited to your own design"/>
                <Card src={SEO} header="Search Engine Optimisation" content="Get custom made websites suited to your own design"/>
                <Card src={ContentPlanning} header="Content Planning and Strategies" content="Get custom made websites suited to your own design"/>
            </div>

            <div id="web-development" data-aos="fade-up">
                <Card src={WebDev} header="Web development" content="Get custom made websites suited to your own design"/>
                <Card src={Ecommerce} header="E-commerce development" content="Get custom made websites suited to your own design"/>
                <Card src={CustomDesign} header="Custom design" content="Get custom made websites suited to your own design"/>
                <Card src={WebSpeed} header="Web page optimization & fast renders" content="Get custom made websites suited to your own design"/>
                <Card src={Maintenance} header="Web page maintenance" content="Get custom made websites suited to your own design"/>
                <Card src={UX} header="Positive user experience" content="Get custom made websites suited to your own design"/>
                <Card src={Testing} header="Server Load Testing & Integration Testing" content="Get custom made websites suited to your own design"/>

            </div>

        </div>
        </React.Fragment>
    )
}

export default Services;
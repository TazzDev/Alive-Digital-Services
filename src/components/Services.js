import React from 'react';
import Card from './Card';


const Services = () => {
    return (
        <div id="services">

            <div id="digital-marketing">

                <h3>Digital Marketing</h3>

                <Card header="Digital marketing content" content="Yollo"/>
                <Card header="Digital marketing content" content="Yollo"/>
                <Card header="Digital marketing content" content="Yollo"/>
                <Card header="Digital marketing content" content="Yollo"/>




            </div>
            <hr style={{margin:"2% 0 0 0",height:"80%"}}/>
            <div id="web-dev">

                <h3>Web Development</h3>

                <Card header="Portfolio Website Development" content="Hello"/>
                <Card header="Portfolio Website Development" content="Hello"/>
                <Card header="Portfolio Website Development" content="Hello"/>
                <Card header="Portfolio Website Development" content="Hello"/>




            </div>

        </div>
    )
}

export default Services;
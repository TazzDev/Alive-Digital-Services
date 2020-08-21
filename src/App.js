import React from 'react';
import ReactDOM from 'react-dom';
import 'aos/dist/aos.css';

// import AppRouter from './router/AppRouter';


import './styles/styles.scss';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';


const App = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <Services/>
            <About/>
            <Contact/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
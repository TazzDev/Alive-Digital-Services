import React from 'react';
import ReactDOM from 'react-dom';

// import AppRouter from './router/AppRouter';


import './styles/styles.scss';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';


const App = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <Services/>
            <About/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
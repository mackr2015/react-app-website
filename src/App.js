import React from 'react';
import Header from './components/Header/Header';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Bootstrap from 'react-bootstrap';
import './bootstrap.min.css';
// Default overwrite 
import './app.scss';
// Roboto Font


export default function App() {
  return (
    <>
    <Header />
      <Router>
        <Switch> 
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/#contact" />
        </Switch>
      </Router>
    </>
  )
}


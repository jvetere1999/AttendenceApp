//display text (Done)//
//create first link to login page//


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home, Login } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root'));

  function WelcomeText() {
  const text= (
    <div>
        <h1>Welcome to St. John Fisher</h1>
        <a href="/Login Page.html">Login</a>
         
    </div>
  );

root.render (Home, Login);
  root.render(text);
  }
  WelcomeText();
  

reportWebVitals();

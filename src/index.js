import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/SliderComponent.css';
import './styles/owl.carousel.css';
import './styles/jquery.fancybox.min.css';
import './styles/animate.css';

window.jQuery = $;
window.$ = $;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
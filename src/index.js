import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import {ProductProvider} from "./context";

ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  document.getElementById('root')
);

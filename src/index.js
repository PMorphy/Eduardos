import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Categories from './components/Categories';
import Shop from './components/Shop';
import Product from './components/Product';
import Specials from './components/Specials';

const routing = (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/categories' component={Categories} />
      <Route exact path='/specials' component={Specials} />
      <Route exact path='/shop' component={Shop} />
      <Route path='/product/:id' component={Product} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

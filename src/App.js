import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <Header />
      <switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;


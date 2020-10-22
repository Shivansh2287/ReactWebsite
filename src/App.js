import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
          <Navbar/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/services" component={Services} exact/>
            <Route path="/products" component={Products} exact/>
            <Route path="/sign-up" component={SignUp} exact/>
          </Switch>
    </Router>
      
  </>
  );
}

export default App;

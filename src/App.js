import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
          <Navbar/>
          <Switch>
            <Route path="/" component={Home} exact/>
          </Switch>
    </Router>
      
  </>
  );
}

export default App;

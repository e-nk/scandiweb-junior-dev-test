import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Header from './components/Navigation/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Navbar} />
        <Route path="/add-product" component={Header} />
      </Switch>
    </Router>
  );
}

export default App;

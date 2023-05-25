import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Header from './components/Navigation/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Navbar />} />
        <Route exact path="/addproduct" render={() => <Header />} />
      </Switch>
      <Switch>
        <Route exact path="/"  />
        <Route exact path="/addproduct" />
      </Switch>
    </Router>
  );
}

export default App;

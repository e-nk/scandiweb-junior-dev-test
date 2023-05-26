import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Header from './components/Navigation/Header';
import Products from './Pages/Products';
import AddProduct from './Pages/AddProduct';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/addproduct">
          <Header />
          {/* <AddProduct /> */}
        </Route>
        <Route path="/">
          <Navbar />
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

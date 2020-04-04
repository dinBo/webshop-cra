import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import ShoppingCart from './components/shoppingCart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shoppingCart">ShoppingCart</Link>
            </li>
          </ul>

          <hr />

          {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shoppingCart">
              <ShoppingCart />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

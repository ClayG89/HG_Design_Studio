import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact_us from './components/Contact_us';
import Home from './components/Home';
import Jewelry from './components/Jewelry';
import Products from './components/Products';
import './App.css';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/jewelry" component={Jewelry} />
          <Route exact path="/contact" component={Contact_us} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

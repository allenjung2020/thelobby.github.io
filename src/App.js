import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import NaviBar from "./NaviBar";
import "./NaviBar.css";

// import Home from "./Home";
import BackEnd from "./BackEnd_Company/BackEnd";
import FrontEnd from "./FrontEnd_Lobby/FrontEnd";
          // <Route exact path="/Home" component={Home}/>
function App() {
  return (
    <div className="App">
        {/*<Route exact path="/" />*/}
        <Router>
          <NaviBar/>
          {/*<nav>*/}
          {/*  /!*<Link to={}*!/*/}
          {/*</nav>*/}
          <Route exact path="/" component={FrontEnd}/>
          <Route exact path="/BackEnd_Company/BackEnd" component={BackEnd}/>
          {/*<NaviBar/>*/}
        </Router>
    </div>
  );
}

export default App;

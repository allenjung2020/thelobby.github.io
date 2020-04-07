// import React, {Component} from 'react';
import React, {Component} from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import NaviBar from "./NaviBar";

import BackEnd from "./BackEnd_Company/BackEnd";
import FrontEnd from "./FrontEnd_Lobby/FrontEnd";
        // <Route exact path="/BackEnd" component={BackEnd} />
        // <Route exact path="/" component={FrontEnd} />
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "front"
    };
  }

  createHtml() {
    if (this.state.page === "front") {
      return <FrontEnd/>;
    } else {
      return <BackEnd/>;
    }
  }

  switchPage = () => {
    if (this.state.page === "front") {
      this.setState({page: "back"});
    } else {
      this.setState({page: "front"});
    }
  }

  render() {
    return (
      <div className="App">
          {/*{console.log("Only front end is built, backend features not accessable")}*/}
          {this.createHtml()}
          <button style={{position:"fixed", top:0, left:0}} onClick={this.switchPage}>Switch</button>
      </div>
    );

  }
}

export default App;

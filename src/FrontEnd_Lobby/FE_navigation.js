import React, {Component} from 'react';
import {Link} from "react-router-dom";
import FE_login from "./FE_login";

import Logo from "./Logo.png";

// uses: FE_login

// this.props
//	name: User name
class FE_navigation extends Component {
    
    constructor(props) {
    	super(props);
    	this.state = {
    		loginClass: "hideLogin"
    	};
    }

    toogleLogin = () => {
    	if (this.state.loginClass === "hideLogin") {
    		this.setState({loginClass: ""});
    	} else {
    		this.setState({loginClass: "hideLogin"});
    	}
    	// console.log(this.state.loginClass);
    }

    displayGreeting() {
    	if (this.props.name !== "") {
    		return <span>{"Hi " + this.props.name.split(" ")[0]}</span>;
    	}
    	return;
    }

	render() {
	    return(
	        <div className="FE_navigation">
                <div className="bar">
    	        	<div className="left both">
    	        		{this.displayGreeting()}
                    	<button className="FE_navigation_button" onClick={this.props.home}>Home</button>
                        <button className="FE_navigation_button" onClick={this.props.about}>About</button>
                    	<button className="FE_navigation_button" onClick={this.props.tutorLobby}>TutorLobby</button>
                    	<button className="FE_navigation_button" onClick={this.props.join}>Join</button>
    	        	</div>
                    <img src={Logo}/>
    	            <div className="right both">
    	        	{/*sign in button*/}
    	            	<button className="FE_navigation_button"
    	            		onClick={this.toogleLogin}>{this.props.buttonName}</button>
    	            </div>
                </div>
	            <FE_login class={this.state.loginClass}
                    sendLogins={this.props.sendLogins}
                    toogleLogin={this.toogleLogin}/>
	        </div>
	    );
	}
}

export default FE_navigation;
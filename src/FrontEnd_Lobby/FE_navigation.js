import React, {Component} from 'react';
import {Link} from "react-router-dom";
import FE_login from "./FE_login";

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
    	console.log(this.state.loginClass);
    }

	render() {
	    return(
	        <div className="FE_navigation">
	        	<div className="left both">
	        		{/*<span>{"Hello " + this.props.name}</span>*/}
	            	<a href="/About" className="FE_navigation_button">About</a>
                	{/*<Link to="/About" className="FE_navigation_button">About</Link>*/}

	            	<a className="FE_navigation_button">Join</a>
	            	<a className="FE_navigation_button">Link</a>
	        	</div>
	            <div className="right both">
	            	<button className="FE_navigation_button"
	            		onClick={this.toogleLogin}>Sign in</button>
	            </div>
	            <FE_login class={this.state.loginClass}
	            	setName={this.props.setName} name={this.props.name}
                    setEmail={this.props.setEmail} email={this.props.email}
                    sendLogins={this.props.sendLogins}/>
	        </div>
	    );
	}
}

export default FE_navigation;
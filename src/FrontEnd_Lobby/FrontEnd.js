import React, {Component} from 'react';
import "./FrontEnd.css";

import FE_navigation from './FE_navigation';
import FE_body from './FE_body';
import FE_footer from './FE_footer';

// manages the layout of the frontend view
// Uses:
//	FE_navigation
//	FE_body
//	FE_footer

class FrontEnd extends Component {
    
    constructor(props) {
    	super(props);
    	this.state = {
    		userName: "",
    		email: ""
    	}
    }

    setName = (name) => {
        this.setState({
            userName: name
        });
    }
    setEmail = (email) => {
        this.setState({
            email: email
        });
    }

    sendLogins = () => {
        // perform sanity check on the name and email
        // send them
        // reset the value?
        console.log(this.state.name);
        console.log(this.state.email);
    }

    // maybe a bad idea to make FE_navigation change the name 
	render() {
	    return(
	        <div id="FrontEnd">
	            <FE_navigation setName={this.setName} name={this.state.userName}
                    setEmail={this.setEmail} email={this.state.email}
                    sendLogins={this.sendLogins}/>
	            <FE_body/>
	            <FE_footer/>
	        </div>
	    );
	}
}

export default FrontEnd;
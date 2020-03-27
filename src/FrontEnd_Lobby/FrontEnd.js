import React, {Component} from 'react';
import "./FrontEnd.css";

import FE_navigation from './FE_navigation';
import FE_body from './FE_body';
import FE_footer from './FE_footer';

class FrontEnd extends Component {
    
    constructor(props) {
    	super(props);
    	this.state = {
    		UserName: "John Doe",
    		Email: "email@email.com"
    	}
    }

    setUserName = (name) => {
    	this.setState({
    		UserName: name
    	});
    }

	render() {
	    return(
	        <div id="FrontEnd">
	            Front End Yah Bro!
	            <FE_navigation setName={this.setUserName} name={this.state.UserName}/>
	            <FE_body/>
	            <FE_footer/>
	        </div>
	    );
	}
}

export default FrontEnd;
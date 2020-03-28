import React, {Component} from 'react';

import NavBar from "../FE_navigation"; 
import "./About.css";

// the about page


class About extends Component {
    
    constructor(props) {
    	super(props);
    }

	render() {
	    return(
	        <div className="About">
	    		<NavBar name="this.props.what?"/>
	        	<p>This is the about page</p>
	        </div>
	    );
	}
}

export default About;
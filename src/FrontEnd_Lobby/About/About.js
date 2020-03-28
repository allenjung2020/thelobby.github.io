import React, {Component} from 'react';

import NavBar from "../FE_navigation"; 


// the about page


class About extends Component {
    
    constructor(props) {
    	super(props);
    }

	render() {
	    return(
	        <div className="About">
	    		<NavBar/>
	        	<p>This is the about page</p>
	        </div>
	    );
	}
}

export default About;
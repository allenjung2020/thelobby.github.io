import React, {Component} from 'react';
import "./FrontEnd.css";

import FE_navigation from './FE_navigation';

class FrontEnd extends Component {
    
    constructor(props) {
    	super(props);
    }

	render() {
	    return(
	        <div id="FrontEnd">
	            Front End Yah Bro!
	            <FE_navigation />
	        </div>
	    );
	}
}

export default FrontEnd;
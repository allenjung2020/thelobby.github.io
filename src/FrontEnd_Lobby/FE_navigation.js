import React, {Component} from 'react';


class FE_navigation extends Component {
    
    constructor(props) {
    	super(props);
    }

	render() {
	    return(
	        <div class="FE_navigation">
	        	<div class="left both">
	        		<span>The Lobby</span>
	        	</div>
	            <div class="right both">
	            	<button class="FE_navigation_button">Log in</button>
	            	<button class="FE_navigation_button">Register</button>
	            </div>
	        </div>
	    );
	}
}

export default FE_navigation;
import React, {Component} from 'react';


class FE_navigation extends Component {
    
    constructor(props) {
    	super(props);
    }

	render() {
	    return(
	        <div class="FE_navigation">
	            <div class="login">
	            	<div>Log in</div>
	            	<div>Register</div>
	            </div>
	        </div>
	    );
	}
}

export default FE_navigation;
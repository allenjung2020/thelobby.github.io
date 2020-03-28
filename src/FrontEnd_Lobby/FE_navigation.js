import React, {Component} from 'react';


class FE_navigation extends Component {
    
    constructor(props) {
    	super(props);
    }

	render() {
	    return(
	        <div className="FE_navigation">
	        	<div className="left both">
	        		<span>{"Hello " + this.props.name}</span>
	            	<a className="FE_navigation_button">About</a>
	            	<a className="FE_navigation_button">Join</a>
	            	<a className="FE_navigation_button">Link</a>
	        	</div>
	            <div className="right both">
	            	<button className="FE_navigation_button">Log in</button>
	            	<button className="FE_navigation_button">Register</button>
	            </div>
	        </div>
	    );
	}
}

export default FE_navigation;

import React, {Component} from 'react';

//uses
// props.
//	name, email
//	setName, setEmail, sendLogin

class FE_about extends Component {
    
    // lie and don't pass the name until sendLogin
    constructor(props) {
    	super(props);
    } 


    createHtml() {
    	return(
    		<div>
    			<h1>Our goal</h1>
    			<ul>
    				<li></li>
    				<li></li>
    			</ul>
    			<h2>How to use</h2>
    			<ul>
    				<li></li>
    				<li></li>
    			</ul>
    			<iframe src="https://itconnect.uw.edu/connect/phones/conferencing/zoom-video-conferencing/zoom-canvas/" />
    			<iframe src="https://zoom.us/join" sandbox="allow-forms"/>

    		</div>
    	);
    }

	render() {
	    return(
	        <div className={"FE_about FE_body"}>
	        	{this.createHtml()}
	        </div>
	    );
	}
}

export default FE_about;
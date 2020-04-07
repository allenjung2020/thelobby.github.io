import React, {Component} from 'react';

/**
 * Background chat area
 * 	Input box,
 * 	Conversation
 * 		Name, message, time?
 */

/*
	From props:
		channel
 */
class TutorChat extends Component {
    
    constructor(props) {
    	super(props);

    }


	render() {
	    return(
	        <div id={"TutorChat"} className={this.props.class}>
	        	<p>This is some chat</p>
	        	<p>This is some chat</p>
	        	<p>This is some chat</p>
	        	<p>This is some chat</p>
	        	<p>This is some chat</p>
	        	<p>This is some chat</p>
	        	<p>This is some chat</p>
	        	<p>This is some chat</p>
	        	<p>This is some chat</p>
	        	<p>This is some chat</p>
	        	<p>This is some chat</p>
	        </div>
	    );
	}
}

export default TutorChat;




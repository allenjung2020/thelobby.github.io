import React, {Component} from 'react';

/**
 * Foreground chatroom selections
 * 	Input box,
 * 	Conversation
 * 		Name, message, time?
 */

/*
	From props:
		
 */
class TutorLobbyForeground  extends Component {
    
    constructor(props) {
    	super(props);
    	this.state = {
    		subjects: []
    	}
    }


    componentDidMount() {
    	// get the avilable subjects
    	let openSubjects = this.getSubjectsAndInfo();

    	// what is one subject
    	
    	
    }


    async getSubjectsAndInfo() {
    	let promise = fetch("what is the link?");

    	if (!promise.ok) {
    		console.log("Error in getting subjects:");
    		console.log(promise);
    		return [];
    	}

    	let result = [];
    	let response = await promise.json();
    	console.log(promise.text());
    	return result;
    }


    generateColumn(num) {
    	// at most 4 columns
    	return ""
    }


	render() {
	    return(
	        <div id={"TutorLobbyForeground"}>
	        	<div class="FE_body_column">
	        		{this.generateColumn(0)}
	        	</div>
	        	<div class="FE_body_column">
	        		{this.generateColumn(1)}
	        	</div>
	        	<div class="FE_body_column">
	        		{this.generateColumn(2)}
	        	</div>
	        	<div class="FE_body_column">
	        		{this.generateColumn(3)}
	        	</div>
	        </div>
	    );
	}
}

export default TutorLobbyForeground;




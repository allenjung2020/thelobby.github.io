import React, {Component} from 'react';
import "./TutorLobby.css";

import TutorChat from './TutorChat';
import TutorLobbyForeground from './TutorLobbyForeground';
/**
 * The lobby area for tutoring that stores
 * all the current subjects (cards), active
 * users/tutors (dots) of that subject.
 *
 * The default chatroom will be open to everyone and 
 * be the default background of the lobby
 *
 * After entering and exiting a specific chatroom, that 
 * room will be the background, blured
 *
 * Entering chatroom animation: carding flying to the left
 * Button to exit "chatroom" 
 * 
 * Chatroom will enforce signing in
 */

/**
 * hardcode in TA data
 * so they are TA after "sign in"
 */

/**
 * Cards
 * On each subject card:
 * 	Show 
 * 		subject,
 * 			description of level
 * 	 	active tutors, professors?
 * 	 	active students
 */

/**
 * Background
 * 	Input box,
 * 	Conversation
 * 		Name, message, time?
 */

/*
	From props:
		username
 */
class TutorLobby extends Component {
    
    constructor(props) {
    	super(props);
    	this.state = {
    		channel: "default",
    		lobby: true
    	};
    }

    getChatClass() {
    	if (this.state.lobby) {
    		return "blur";
    	}
    }

	render() {
	    return(
	        <div id={"TutorLobby"}>
	        	<TutorChat 
	        		channel={this.state.channel}
	        		class={this.getChatClass()}
	        	/>

	        	<TutorLobbyForeground />
	        </div>
	    );
	}
}

export default TutorLobby;




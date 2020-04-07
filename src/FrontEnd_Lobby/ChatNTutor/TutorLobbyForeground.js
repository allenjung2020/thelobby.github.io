import React, {Component} from 'react';
import SubjectCard from './SubjectCard';

/**
 * Foreground chatroom selections
 * 	Input box,
 * 	Conversation
 * 		Name, message, time?
 */

/*
	From props:
		username and email
 */
class TutorLobbyForeground  extends Component {
    
    constructor(props) {
    	super(props);
    	this.state = {
            requestURL: "",
    		subjects: []
    	}
    }


    componentDidMount() {
    	// get the avilable subjects
        let serverURL = prompt("What is the server URL?");
        if (serverURL === null || serverURL.trim() === "") {
            this.setState({
                requestURL: "http://localhost:4567/test"
            });
        } else {
            this.setState({
                requestURL: serverURL
            });
        }
        console.log("Using URL " + serverURL);
    	this.getSubjectsAndInfo();
    }

    /**
     * get the subjects overview from server
     * set the state.subjects to the list of subjects
     */
    async getSubjectsAndInfo(URL) {
        if (this.state.requestURL === "") {
            console.log("Not ready yet, not requesting");
            return;
        }
        try {
            console.log("Requesting from: " + this.state.requestURL);
        	let promise = await fetch(this.state.requestURL);

        	if (!promise.ok) {
        		console.log("Error in getting subjects:");
        		console.log(promise);
        		return;
        	}

            // console.log(promise);
        	let response = await promise.json();
        	// console.log(response);
            this.setState({
                subjects: response
            });
        	return;

        } catch (e) {
            console.log("Server is not running?");
            console.log("   " + e);
        }
    }


    componentDidUpdate() {
        if (this.state.requestURL !== "" && this.state.subjects.length === 0) {
            this.getSubjectsAndInfo();
        }
    }

    generateColumn(num) {
        // at most 4 columns
    	let html = [];
        for (let i = num; i < this.state.subjects.length; i += 4) {
            // console.log(this.state.subjects[i]);
            html.push(<SubjectCard key={i} name={this.state.subjects[i].name}
                tutorCount={this.state.subjects[i].tutorCount}
                tuteeCount={this.state.subjects[i].tuteeCount}
                professorCount={this.state.subjects[i].professorCount} 
                onClick={this.props.enterChatRoom}
                />
            );
        }
        return html;
    }


	render() {
	    return(
	        <div id={"TutorLobbyForeground"}>
	        	<div className="columns">
                    <div className={"for_alignment"}></div>
	        		{this.generateColumn(0)}
	        	</div>
	        	<div className="columns">
                    <div className={"for_alignment"}></div>
	        		{this.generateColumn(1)}
	        	</div>
	        	<div className="columns">
                    <div className={"for_alignment"}></div>
	        		{this.generateColumn(2)}
	        	</div>
	        	<div className="columns">
                    <div className={"for_alignment"}></div>
	        		{this.generateColumn(3)}
	        	</div>
	        </div>
	    );
	}
}

export default TutorLobbyForeground;




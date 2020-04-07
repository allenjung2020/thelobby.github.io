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
    	this.getSubjectsAndInfo();


            // console.log(openSubjects);
    	// for (let el of openSubjects) {
        // }
    	
    }


    async getSubjectsAndInfo() {
    	let promise = await fetch("http://localhost:4567/test");

    	if (!promise.ok) {
    		console.log("Error in getting subjects:");
    		console.log(promise);
    		return;
    	}

    	let response = await promise.json();
    	// console.log(response);
        this.setState({
            subjects: response
        });
    	return;
    }


    generateColumn(num) {
        // at most 4 columns
    	let html = [];
        for (let i = num; i < this.state.subjects.length; i += 4) {
            // console.log(this.state.subjects[i]);
            html.push(<SubjectCard key={i} name={this.state.subjects[i].name}
                tutorCount={this.state.subjects[i].tutorCount}
                tuteeCount={this.state.subjects[i].tuteeCount}
                professorCount={this.state.subjects[i].professorCount} />
            );
        }
        return html;
    }


	render() {
	    return(
	        <div id={"TutorLobbyForeground"}>
	        	<div className="FE_body_column">
	        		{this.generateColumn(0)}
	        	</div>
	        	<div className="FE_body_column">
	        		{this.generateColumn(1)}
	        	</div>
	        	<div className="FE_body_column">
	        		{this.generateColumn(2)}
	        	</div>
	        	<div className="FE_body_column">
	        		{this.generateColumn(3)}
	        	</div>
	        </div>
	    );
	}
}

export default TutorLobbyForeground;




import React, {Component} from 'react';
import "./FrontEnd.css";

import FE_navigation from './FE_navigation';
import FE_body from './FE_body';
import FE_footer from './FE_footer';
import FE_about from './FE_about';
/**
 * Tutor aspect
 */
import TutorLobby from './ChatNTutor/TutorLobby';

// manages the layout of the frontend view
// Uses:
//	FE_navigation
//	FE_body
//	FE_footer

class FrontEnd extends Component {
    
    constructor(props) {
    	super(props);
    	this.state = {
    		userName: "",
    		email: "",
            buttonName: "Sign in",
            body: "TutorLobby" //default page is home
    	}
    }



    sendLogins = (name, email, successfunction) => {
        // perform sanity check on the name and email
        console.log(this.state.email);
        if (email.includes("\n") || email.split("@").length !== 2) {
            alert("invalid email: " + email);
            return;
        }
        if (name === "") {
            alert("invalid name: " + this.state.userName);
            return;
        }
        // send them
        // reset the value?
        // console.log(this.state.userName);
        // console.log(this.state.email);
        this.setState({
            buttonName: "Switch account",
            userName: name,
            email: email
        });
        successfunction();
    }

    // the subpages
    
    decideBody() {
        if (this.state.body === "home") {
            return <FE_body/>;
        } else if (this.state.body === "about") {
            return <FE_about/>;
        } else if (this.state.body === "TutorLobby") {
            return <TutorLobby />
        }
    }

    // maybe a bad idea to make FE_navigation change the name 
	render() {
	    return(
	        <div id="FrontEnd">
	            <FE_navigation 
                    name={this.state.userName}
                    email={this.state.email}
                    sendLogins={this.sendLogins} 
                    buttonName={this.state.buttonName}
                    
                    home={e => this.setState({body: "home"})}
                    about={e => this.setState({body: "about"})}
                    
                    tutorLobby={e => this.setState({body: "TutorLobby"})}  //add tutor body}
                    />
                {this.decideBody()}
	            <FE_footer/>
	        </div>
	    );
	}
}

export default FrontEnd;
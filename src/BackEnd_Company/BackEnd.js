import React, {Component} from 'react';

import "./BackEnd.css";

import BE_navigation from "./BE_navigation";

import BE_nextStudent from "./BE_nextStudent";

class BackEnd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: "",
            buttonName: "Sign in",
            student: "",
            studentEmail: ""
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
        this.setState({
            buttonName: "Switch account",
            userName: name,
            email: email
        });
        successfunction();
    };

    Dequeue = async() => {
        await fetch("https://8ckk6ja3rk.execute-api.us-west-2.amazonaws.com/Dequeue/dequeueclient",
            {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({"key": "CSE142"})
                })
            .then(response => response.json())

            .then(data => this.setState({
                    student: data.name,
                    studentEmail: data.email
                }));
    };

    render() {
        return (
            <body id="BackEnd">
                <BE_navigation
                    name={this.state.userName}
                    email={this.state.email}
                    sendLogins={this.sendLogins} buttonName={this.state.buttonName}
                />
                <button className={"Dequeue"} onClick={this.Dequeue}>Next Student</button>

                <BE_nextStudent student={this.state.student} email={this.state.studentEmail}/>
            </body>
        );
    }
}

export default BackEnd;
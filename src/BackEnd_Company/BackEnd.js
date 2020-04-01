import React, {Component} from 'react';

import "./BackEnd.css";

import BE_navigation from "./BE_navigation";
import FE_navigation from "../FrontEnd_Lobby/FE_navigation";
import FE_body from "../FrontEnd_Lobby/FE_body";
import FE_footer from "../FrontEnd_Lobby/FE_footer";

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

    // setUserName = (name) => {
    //     this.setState({
    //         UserName: name
    //
    //     });
    // };

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
    };

    Dequeue = async() => {
        // let dat;
        // let name = "";
        // let email = "";
        await fetch("https://8ckk6ja3rk.execute-api.us-west-2.amazonaws.com/Dequeue/dequeueclient",
            {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({"key": "CSE142"})
                })
            .then(response => response.json())
            // .then(data => alert(data));

            .then(data => this.setState({
                    student: data.name,
                    studentEmail: data.email
                }));

            alert(this.state.student);
            alert(this.state.studentEmail);
            // .then(data => email = data.email)
            // .then(data => console.log(data));

            // await this.setState({
            //     student : name,
                // studentEmail : email
            // });
            // .then(data => this.setState({
            //     student: data.name,
            //     studentEmail: data.email
            // }));

            // alert(dat);

            // alert(dat);

            // .then(data => this.setState({ student: data.name,
            //     studentEmail: data.email }));


            // try {
            //     // Give specific url for the server to parse
            //     //                                     https://8ckk6ja3rk.execute-api.us-west-2.amazonaws.com/Prod/
            //     // https://8ckk6ja3rk.execute-api.us-west-2.amazonaws.com/Dequeue
            //     // Requ
            //     let requestBody = {
            //         method: "OPTIONS",
            //         // mode : 'no-cors',
            //         headers: {'Content-Type': 'application/json'},
            //         body: JSON.stringify({"key": "CSE142"})
            //     };
            //     let response = await fetch("https://8ckk6ja3rk.execute-api.us-west-2.amazonaws.com/Dequeue/dequeueclient", requestBody);
            //
            //     // fetch("https://8ckk6ja3rk.execute-api.us-west-2.amazonaws.com/Dequeue/dequeueclient", requestBody)
            //     //     .then(response => response.json())
            //     //     .then(data => this.setState({ student: data.name,
            //     //                                         studentEmail: data.email }));
            //
            //     if (!response.ok) {
            //         console.log(response);
            //         alert(response.status);
            //
            //         return; // Don't keep trying to execute if the response is bad.
            //     }
            //     alert("Request made. Here");
            //     // Convert what we get back into a JSON
            //     let object = await response.json();
            //
            //     alert("Changed into a json");
            //     // Store the path we get into the state to pass it to the children
            //     // Store the cost of the path to display to the user how far the path
            //     // they are to take will be.
            //     // Store where the path is between.
            //
            //     this.setState({
            //         student: object.name,
            //         studentEmail: object.email
            //     });
            //
            // } catch (e) {
            //     alert("There was an error contacting the server.");
            //     console.log(e);
            // }
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
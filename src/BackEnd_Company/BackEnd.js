import React, {Component} from 'react';

import BE_navigation from "./BE_navigation";
import FE_navigation from "../FrontEnd_Lobby/FE_navigation";
import FE_body from "../FrontEnd_Lobby/FE_body";
import FE_footer from "../FrontEnd_Lobby/FE_footer";

import BE_nextStudent from "./BE_nextStudent";

class BackEnd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            UserName: "",
            Email: "email@email.com",
            student: "",
            studentEmail: ""
        }
    }

    setUserName = (name) => {
        this.setState({
            UserName: name

        });
    };

    async Dequeue() {
            try {
                // Give specific url for the server to parse
                let response = await fetch("https://8ckk6ja3rk.execute-api.us-west-2.amazonaws.com/Prod/dequeueclient/", {
                    method: "PUT",
                    body: JSON.stringify({
                        key: "CSE142"
                    })
                });
                // let url = "http://localhost:4567/find-path?";

                // The two buildings to find a path between
                // url += "start=" + this.state.UserName + "&";
                // url += "end=" + end;


                // Call to server
                // let response = await fetch(url);
                if (!response.ok) {
                    // let error = "The status is wrong! Expected: 200, Was: " + response.status;
                    // if (response.status === 400) {
                    //     error += "\nStart or end was not one of the building shortnames.";
                    // }
                    // alert(error);

                    return; // Don't keep trying to execute if the response is bad.
                }

                // Convert what we get back into a JSON
                let object = await response.json();

                // Store the path we get into the state to pass it to the children
                // Store the cost of the path to display to the user how far the path
                // they are to take will be.
                // Store where the path is between.

                this.setState({
                    student: object.name,
                    studentEmail: object.email
                });

            } catch (e) {
                alert("There was an error contacting the server.");
            }
    }

    render() {
        return (
            <div id="BackEnd">
                {/*<textarea*/}
                {/*    rows={5}*/}
                {/*    cols={30}*/}
                {/*    onChange={this.setUserName}*/}
                {/*    value={this.state.UserName}*/}
                {/*/>*/}
                {/*<BE_navigation setName={this.setUserName} name={this.state.UserName}/>*/}
                <button onClick={this.Dequeue}>Dequeue</button>

                <BE_nextStudent student={this.state.student} email={this.state.studentEmail}/>
                {/*<FE_body/>*/}
                {/*<FE_footer/>*/}
            </div>
        );
    }
}

export default BackEnd;
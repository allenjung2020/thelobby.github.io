import React, {Component} from 'react';
import {Link} from "react-router-dom";

// this.props
//	name: User name
class BE_nextStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: ""
        }
    }

    render() {
        return(
            <div className={"student"}>
                <div>
                    Student:   {this.props.student}
                </div>
                <div>
                    Email: {this.props.email}
                </div>
            </div>

        );
    }

}

export default BE_nextStudent;
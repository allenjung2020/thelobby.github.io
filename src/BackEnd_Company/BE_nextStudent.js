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

    updateStudent = () => {
        if (!this.props.student.equals("")) {
            this.setState({
                display: "Student: " + this.props.student + "\nEmail: " +this.props.email
            })
        }
    }

    render() {
        return(
            <div>
                {this.state.display}
            </div>
        );
    }

}

export default BE_nextStudent;
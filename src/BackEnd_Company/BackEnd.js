import React, {Component} from 'react';

class BackEnd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            UserName: "John Doe",
            Email: "email@email.com"
        }
    }


    render() {
        return (
            <div>
                Back End Uh HUH Bro!
            </div>
        );
    }
}

export default BackEnd;
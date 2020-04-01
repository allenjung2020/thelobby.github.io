import React, {Component} from 'react';

//uses
// props.
//	name, email
//	setName, setEmail, sendLogin

class BE_login extends Component {

    // lie and don't pass the name until sendLogin
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: ""
        };
    }
    // lie and don't pass the name until sendLogin
    submit = () => {
        this.props.sendLogins(this.state.userName, this.state.email, this.props.toogleLogin);
    }

    render() {
        return(
            <div className={"BE_login " + this.props.class}>
                <div>
                    <input placeholder="NAME" value={this.state.userName}
                           onChange={e => this.setState({userName: e.target.value})}/>
                </div>
                <div>
                    <input placeholder="EMAIL" value={this.state.email}
                           onChange={e => this.setState({email: e.target.value})}/>
                </div>
                <button className="BE_navigation_button" onClick={this.submit}>Submit</button>
            </div>
        );
    }
}

export default BE_login;
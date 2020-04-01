import React, {Component} from 'react';
import {Link} from "react-router-dom";
import BE_login from "./BE_login";

// uses: FE_login

// this.props
//	name: User name
class BE_navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginClass: "hideLogin"
        };
    }

    toogleLogin = () => {
        if (this.state.loginClass === "hideLogin") {
            this.setState({loginClass: ""});
        } else {
            this.setState({loginClass: "hideLogin"});
        }
        // console.log(this.state.loginClass);
    }

    displayGreeting() {
        if (this.props.name !== "") {
            return <span>{"Hi " + this.props.name}</span>;
        }
        return;
    }

    render() {
        return(
            <div className="BE_navigation">
                <div className="left both">
                    {this.displayGreeting()}
                </div>
                <div className="right both">
                    {/*sign in button*/}
                    <button className="BE_navigation_button"
                            onClick={this.toogleLogin}>{this.props.buttonName}</button>
                </div>
                <BE_login class={this.state.loginClass}
                          sendLogins={this.props.sendLogins}
                          toogleLogin={this.toogleLogin}/>
            </div>
        );
    }
}

export default BE_navigation;
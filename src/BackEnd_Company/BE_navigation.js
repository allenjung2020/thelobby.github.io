import React, {Component} from 'react';
import {Link} from "react-router-dom";

// this.props
//	name: User name
class BE_navigation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <textarea
                    rows={5}
                    cols={30}
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
                <button onClick={}></button>
            </div>
            // <div className="FE_navigation">
            //     <div className="left both">
            //         <span>{"Hello " + this.props.name}</span>
            //         <a href="/About" className="FE_navigation_button">About</a>
            //         {/*<Link to="/About" className="FE_navigation_button">About</Link>*/}
            //
            //         <a className="FE_navigation_button">Join</a>
            //         <a className="FE_navigation_button">Link</a>
            //     </div>
            //     <div className="right both">
            //         <button className="FE_navigation_button"
            //                 onClick={e => (console.log("log in"))}>Log in</button>
            //         <button className="FE_navigation_button">Register</button>
            //     </div>
            // </div>
        );
    }
}

export default BE_navigation;
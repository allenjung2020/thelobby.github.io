
import React, {Component} from 'react';

//uses
// props.
//	name, email
//	setName, setEmail, sendLogin

class FE_login extends Component {
    
    // maybe a bad idea to make FE_navigation change the name 
	render() {
	    return(
	        <div className={"FE_login " + this.props.class}>
	        	<div>
	        		<input placeholder="NAME" value={this.props.name}
	        		onChange={e => this.props.setName(e.target.value)}/>
	        	</div>
	        	<div>
	        		<input placeholder="EMAIL" value={this.props.email} 
	        		onChange={e => this.props.setEmail(e.target.value)}/>
	        	</div>
	        	<button className="FE_navigation_button" onClick={this.props.sendLogins}>Sign in</button>
	        </div>
	    );
	}
}

export default FE_login;
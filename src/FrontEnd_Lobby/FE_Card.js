import React, {Component} from 'react';


// represent one subject area in the lobby
// contains all the information for on topic
// uses: this.props.
//	subject
//	description
//	number
//	img
		

class FE_Card extends Component {
    
    constructor(props) {
    	super(props);
    }

	render() {
	    return(
	        <div className="FE_Card">
	        	{console.log()}
	        	<img src={ require("" + this.props.img)} alt="company profile image" />
	        	<h1>{this.props.subject}</h1>
	        	<p>{this.props.description}</p>
	        	<p>{this.props.number + " in line"}</p>
	        	<button>Join Queue</button>
	        </div>
	    );
	}
}

export default FE_Card;
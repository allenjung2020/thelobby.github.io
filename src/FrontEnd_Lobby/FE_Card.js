import React, {Component} from 'react';


// represent one subject area in the lobby
// contains all the information for on topic
// uses: this.props.
//	subject
//	description
		

class FE_Card extends Component {
    
    constructor(props) {
    	super(props);
    }

	render() {
	    return(
	        <div class="FE_Card">
	        	<h1>{this.props.subject}</h1>
	        	<p>{this.props.description}</p>
	        </div>
	    );
	}
}

export default FE_Card;
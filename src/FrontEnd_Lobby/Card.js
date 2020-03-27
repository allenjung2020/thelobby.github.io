import React, {Component} from 'react';


class Card extends Component {
    
    constructor(props) {
    	super(props);
    }

	render() {
	    return(
	        <div class="Card">
	        	<h1>{this.props.subject}</h1>
	        	<p>{this.props.description}</p>
	        </div>
	    );
	}
}

export default Card;
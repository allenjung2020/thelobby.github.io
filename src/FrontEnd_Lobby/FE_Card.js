import React, {Component} from 'react';


// represent one subject area in the lobby
// contains all the information for on topic
// uses: this.props.
//	subject
//	description
//	number
//	img
		

class FE_Card extends Component {
    
    // constructor(props) {
    // 	super(props);
    // 	this.state = {
    // 		class: "hide"
    // 	};
    // }


    // to use images without import use require("path")
    // need to use a transparent div to align thing to the top
	render() {
	    return(
	        <div className={"FE_Card "}>
	        	<div className="zero_height">_</div>
	        	<img src={ require("" + this.props.img)} alt="company profile" />
	        	<h1>{this.props.subject}</h1>
	        	<p>{this.props.description}</p>
	        	<div className={"container"}>
					<span>{this.props.number + " in line "}</span>
					<button>Join Queue</button>
	        	</div>
	        </div>
	    );
	}
}

export default FE_Card;
import React, {Component} from 'react';
import "./FE_footer.css"

class FE_footer extends Component {
    
    constructor(props) {
    	super(props);
    	this.state = {
    		textareaClassName: "hideInput",
    		feedback: ""
    	};
    }

    // toogle the textarea
    showHideInput = () => {
    	if (this.state.textareaClassName === "hideInput") {
    		this.setState({textareaClassName: "showInput"});
    	} else {
    		this.setState({textareaClassName: "hideInput"});
    	}
    }

    sendFeeback = () => {
    	// send str somehow
    	this.setState({
    		feedback: "thank you"
    	});
    }

	render() {
	    return(
	        <div className="FE_footer">
	        	<div>
	        		Footer
	        	</div>
	        	<div className="feedback">
	        		<p onClick={e => this.showHideInput()}>Bugs? Feedbacks? Suggestions? Tell us here</p>
	        		<div className={"inputDiv " + this.state.textareaClassName}>
	        			<textarea value={this.state.feedback} placeholder="type here" 
	        				onChange={e => this.setState({feedback: e.target.value})}/>
	        			<button onClick={e => this.sendFeeback()}>Send</button>
	        		</div>
	        	</div>
	        </div>
	    );
	}
}

export default FE_footer;
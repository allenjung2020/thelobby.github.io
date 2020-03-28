import React, {Component} from 'react';
import "./FE_footer.css"

class FE_footer extends Component {
    
    constructor(props) {
    	super(props);
    	this.state = {
    		textareaClassName: "hideInput"
    	};
    }

    showHideInput = () => {
    	if (this.state.textareaClassName === "hideInput") {
    		this.setState({textareaClassName: "showInput"});
    	} else {
    		this.setState({textareaClassName: "hideInput"});
    	}
    }

	render() {
	    return(
	        <div className="FE_footer">
	        	Footer
	        	<div className="feedback">
	        		<p onClick={e => this.showHideInput()}>Bugs? Feedbacks? Suggestions? Tell us here</p>
	        		<div className="inputDiv">
	        			<textarea className={this.state.textareaClassName} />
	        			<button>Send</button>
	        		</div>
	        	</div>
	        </div>
	    );
	}
}

export default FE_footer;
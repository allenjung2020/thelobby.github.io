import React, {Component} from 'react';

import Card from './Card'; 

class FE_body extends Component {
    
    constructor(props) {
    	super(props);
    }

    makeExampleCard() {
    	return <Card subject="Physics" description="Contains the avaliable physics classes"/>
    }

	render() {
	    return(
	        <div class="FE_body">
	        	<div class="column">
	        		{this.makeExampleCard()}
	        	</div>
	        	<div class="column">
	        		{this.makeExampleCard()}
	        	</div>
	        	<div class="column">
	        		{this.makeExampleCard()}
	        	</div>
	        	<div class="column">
	        		{this.makeExampleCard()}
	        		{this.makeExampleCard()}
	        		{this.makeExampleCard()}
	        	</div>
	        	<div class="column">
	        		{this.makeExampleCard()}
	        		{this.makeExampleCard()}
	        	</div>
	        </div>
	    );
	}
}

export default FE_body;
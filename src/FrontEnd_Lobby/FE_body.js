import React, {Component} from 'react';

import Card from './FE_Card'; 


// contains the main content of the lobby
// a list of strings from backend ?
// then pass this list to the individual "Card" 



class FE_body extends Component {
    
    constructor(props) {
    	super(props);
    }

    makeExampleCard() {
    	let r = this.generateRandomStr(7);
		let length = Math.random() * 60 + 15;
		let description = "";
		for (let i = 0; i < length; i++) {
			description += this.generateRandomStr(Math.floor(Math.random()*7 + 3)) + " ";
		}

    	return <Card subject={r} description={description} 
    	number={Math.floor(Math.random()*10)} img={"./imgSample/company" + Math.floor(Math.random()*10+1) + ".png"}/>
    }

    generateRandomStr(length) {
    	let result = "";
    	for (let i = 0; i < length; i++) {
    		result += String.fromCharCode(Math.floor(Math.random()*26+97));
    	}
    	return result;
    }



	render() {
	    return(
	        <div className="FE_body">
	        	<div className="column">
	        		{this.makeExampleCard()}
	        		{this.makeExampleCard()}
	        		{this.makeExampleCard()}
	        		{this.makeExampleCard()}
	        		{this.makeExampleCard()}
	        	</div>
	        	<div className="column">
	        		{this.makeExampleCard()}
	        		{this.makeExampleCard()}
	        		{this.makeExampleCard()}
	        	</div>
	        	<div className="column">
	        		{this.makeExampleCard()}
	        		{this.makeExampleCard()}
	        	</div>
	        	<div className="column">
	        		{this.makeExampleCard()}
	        		{this.makeExampleCard()}
	        		{this.makeExampleCard()}
	        	</div>
	        	<div className="column">
	        		{this.makeExampleCard()}
	        		{this.makeExampleCard()}
	        	</div>
	        </div>
	    );
	}
}

export default FE_body;
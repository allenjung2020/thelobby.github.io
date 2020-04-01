import React, {Component} from 'react';

import Card from './FE_Card'; 


// contains the main content of the lobby
// a list of strings from backend ?
// then pass this list to the individual "Card" 



class FE_body extends Component {
    
    constructor(props) {
    	super(props);
    	this.state = {
    		cards: []
    	};
    }

    makeExampleCard() {
    	let r = this.generateRandomStr(7);
		let length = Math.random() * 30 + 15;
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


    componentDidMount() {
    	// get booths from server
    	let newCards = [];
    	for (let i = 0; i < 40; i++) {
    		newCards.push(this.makeExampleCard());
    	}
    	this.setState({
    		cards: newCards
    	});
    }

    generateColumns() {
    	if (this.state.cards.length === 0) {
    		return;
    	}
    	let result = [];
    	for (let i = 0; i < 5; i++) {
    		result.push([]);
    	} // 5 columns

    	// calculate how many cards in each column
    	let count = this.state.cards.length / 5;
    	for (let i = 0; i < this.state.cards.length; i++) {
    		result[Math.floor(i / count)].push(this.state.cards[i]);
    	}

    	let html = [];
    	for (let i = 0; i < 5; i++) {
    		html.push(<div className="FE_body_column">{result[i]}</div>);
    	}

    	return html;
    }


	render() {
	    return(
	        <div className="FE_body">
				{this.generateColumns()}
	        </div>
	    );
	}
}

export default FE_body;
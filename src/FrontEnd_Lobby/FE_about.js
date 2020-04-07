
import React, {Component} from 'react';

//uses
// props.
//	name, email
//	setName, setEmail, sendLogin

class FE_about extends Component {
    
    // lie and don't pass the name until sendLogin

    createHtml() {
    	return(
    		<div>
    			<h1>Our goal</h1>
    			<div className="FE_about_info">
					<p>Schools have always had a unique relationship with colleges and universities as they often serve as the highest concentration of diverse talent and skills that are so important to companies today.  For years students and these companies have been able to connect through job fairs where students could have face to face time with representatives of these companies, to learn and to have a more casual conversation before an interview.  
					</p>
					
					<p>As situations arise where these sorts of interactions are no longer possible, and more and more students are earning their degrees online, how will this valuable interaction continue to be an integral part of jump starting students’ careers?
					</p>
					
					<p>We seeks to create a virtual career fair that gives students the opportunity to not only get a larger view of the opportunities available for them, but also get important information on the companies as well as talk to representatives one on one.
					</p>
					
					<p>This is done through creating a dashboard where users can get quick information on a lot of companies, drop their resume into some, as well as add themselves in line to talk to a company representative over zoom.
					</p>
					
					<p>While nothing can completely substitute the opportunity to interact with companies in person, we want to gives users a chance to simply get information and connect with companies and companies to be able to simply connect with young professionals.
					</p>
				</div>
    			
    			<iframe title="UW Zoom Instruction" src="https://itconnect.uw.edu/connect/phones/conferencing/zoom-video-conferencing/zoom-canvas/" />
    			<iframe title="Zoom Page" src="https://zoom.us/join" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" />

    		</div>
    	);
    }

	render() {
	    return(
	        <div className={"FE_about FE_body"}>
	        	{this.createHtml()}
	        </div>
	    );
	}
}

export default FE_about;
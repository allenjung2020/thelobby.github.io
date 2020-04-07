import React, {Component} from 'react';


/*
	From props:
		name
        tutorCount
        tuteeCount
        professorCount
 */
class SubjectCard  extends Component {
    

	render() {
	    return(
	        <div className={"SubjectCard"}>
                <div>
                    {this.props.name}
                </div>
                <div>
                    {this.props.tutorCount}
                </div>
                <div>
                    {this.props.tuteeCount}
                </div>
                <div>
                    {this.props.professorCount}
                </div>
	        </div>
	    );
	}
}

export default SubjectCard;




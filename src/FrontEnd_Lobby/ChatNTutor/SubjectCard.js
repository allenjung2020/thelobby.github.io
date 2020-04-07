import React, {Component} from 'react';


/*
	From props:
		name
        tutorCount
        tuteeCount
        professorCount

        onClick()
 */
class SubjectCard  extends Component {
    

    generateCard() {
        // choose an image
        let imgPath = "./subjectImg/" + this.props.name +".jpg";
        let imgTag = [];

        try {
            imgTag.push(<img src={require("" + imgPath)} alt={this.props.name}/>);
        } catch (e) {
            console.log("image not there: " + imgPath);
            console.log("image: " + this.props.name);
        }

        let html = [];

        html.push(
            <div key={2} className="imgTextTitle">
                <div key={5} className="img_wrapper">
                    {imgTag}
                </div>
                <div key={6} className="title_dummy"> </div>
                <div className="subject_title">{this.props.name}</div>
            </div>
        );

        html.push(<div key={3} className="subjectStats">
            <div>
                {this.props.tutorCount}
            </div>
            <div>
                {this.props.tuteeCount}
            </div>
            <div>
                {this.props.professorCount}
            </div>
        </div>);

        return html;
    }

	render() {
	    return(
	        <div className={"SubjectCard"} onClick={e => this.props.onClick(this.props.name)}>
                {this.generateCard()}
	        </div>
	    );
	}
}

export default SubjectCard;




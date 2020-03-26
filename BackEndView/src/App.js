/*
 */

import React, {Component} from 'react';

// import Map from "./Map";
// import "./Map.css";
//
// import BuildingNames from "./BuildingNames";
// import "./BuildingNames.css";
//
// import SelectMenu from "./SelectMenu";
// import "./SelectMenu.css";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            path: null,
            startPath: "NOWHERE",
            start: "BAG",
            end: "BAG",
            cost: 0
        };
    }

    // Find the path between the 2 buildings.
    // async findPath (start, end) {
    //     try {
    //         // Give specific url for the server to parse
    //         let url = "http://localhost:4567/find-path?";
    //
    //         // The two buildings to find a path between
    //         url += "start=" + start + "&";
    //         url += "end=" + end;
    //
    //
    //         // Call to server
    //         let response = await fetch(url);
    //         if (!response.ok) {
    //             let error = "The status is wrong! Expected: 200, Was: " + response.status;
    //             if (response.status === 400) {
    //                 error += "\nStart or end was not one of the building shortnames.";
    //             }
    //             alert(error);
    //
    //             return; // Don't keep trying to execute if the response is bad.
    //         }
    //
    //         // Convert what we get back into a JSON
    //         let object = await response.json();
    //
    //         // Store the path we get into the state to pass it to the children
    //         // Store the cost of the path to display to the user how far the path
    //         // they are to take will be.
    //         // Store where the path is between.
    //         this.setState({
    //             path: object,
    //             cost: object.cost,
    //             startPath: start + " to " + end
    //         })
    //
    //     } catch (e) {
    //         alert("There was an error contacting the server.");
    //     }
    // };

    // When the draw button is pushed, the path is found between the
    // two buildings the user have chosen to find a path between.
    // updateBuildingSearch = () => {
    //     this.findPath(this.state.start, this.state.end);
    // };

    // When the reset button is pressed, the campus map path finder
    // is reset to when it is first opened.
    // updateClear = () => {
    //     this.setState({
    //         path: null,
    //         cost: 0,
    //         startPath: "NOWHERE",
    //         start: "BAG",
    //         end: "BAG"
    //     });
    // };


    // // Update the start building to be another place on campus
    // updateStart = (event) => {
    //     this.setState({
    //         start: event.target.value
    //     });
    // };
    //
    // // Update the end building to be another place on campus
    // updateEnd = (event) => {
    //     this.setState({
    //         end: event.target.value
    //     });
    // };

    // Renders the whole campus map GUI.
    render() {
        return (
            <div>
                {/*<h1>UW Campus Paths</h1>*/}
                {/*<Map edges={this.state.path}/>*/}
                {/*<div className="Select">*/}
                {/*    Start*/}
                {/*    <SelectMenu value={this.state.start} onChange={this.updateStart}/>*/}
                {/*</div>*/}
                {/*<div className="Select">*/}
                {/*    End*/}
                {/*    <SelectMenu value={this.state.end} onChange={this.updateEnd}/>*/}
                {/*</div>*/}
                {/*<button onClick={this.updateBuildingSearch}>Draw</button>*/}
                {/*<button onClick={this.updateClear}>Clear</button>*/}
                {/*<h2>Total travel distance of {this.state.startPath} will be {Math.round(this.state.cost * 100)/100.0} feet</h2>*/}
                {/*<BuildingNames/>*/}
            </div>
        );
    }

}

export default App;

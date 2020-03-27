import React from "react";
import {Link} from "react-router-dom";

function NaviBar() {
    return(
        <p>
            {/*<div className="Navigation">*/}
            {/*    <Link to="/Home">Home</Link>*/}
            {/*</div>*/}
            <div className="Navigation">
                <Link to="/">FrontEnd</Link>
            </div>
            <div className="Navigation">
                <Link to="/BackEnd_Company/BackEnd">BackEnd</Link>
            </div>
        </p>
        // <ul>
        //     <li><Link to="/Home">Home</Link></li>
        //     <li><Link to="/FrontEnd_Lobby/FrontEnd">FrontEnd</Link></li>
        //     <li><Link to="/BackEnd_Company/BackEnd">BackEnd</Link></li>
        //     {/*<li><Link to="/">Home</Link></li>*/}
        // </ul>
    );
}

export default NaviBar;
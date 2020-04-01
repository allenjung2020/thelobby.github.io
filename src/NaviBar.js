import React from "react";
import {Link} from "react-router-dom";
import "./NaviBar.css";

function NaviBar() {
    return(
        <div className="Navigation">
            <Link to="/">FrontPage</Link>
            <Link to="/BackEnd_Company/BackEnd">Backpage</Link>
            <a href="./">FrontPageLink</a>
            <a href="/BackEnd_Company/BackEnd">BackEndpage</a>
        </div>
    );
}

export default NaviBar;
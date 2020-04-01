import React from "react";
import {Link} from "react-router-dom";

function NaviBar() {
    return(
        <div className="Navigation">
            <Link to="/">FrontPage</Link>
            <Link to="/BackEnd_Company/BackEnd">Backpage</Link>
        </div>
    );
}

export default NaviBar;
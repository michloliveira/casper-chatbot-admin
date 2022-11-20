import React from "react";
import logo from "../assets/elifeLogoWhite.png"

function Header() {
    return(

        <header className="navbar navbar-dark bg-dark d-flex">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 " href="/"><img src={logo} height= {32} alt="logo" /></a>
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="/">Sign out</a>
                </div>
            </div>
        </header>
    );
    
}

export default Header;


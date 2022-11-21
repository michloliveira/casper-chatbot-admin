import React from "react";
import logo from "../assets/elifeLogoWhite.png"

function Header() {
    function logout(){
        localStorage.removeItem("@firebase:user")
        window.location.reload(false);
    }

    return(

        <header className="navbar navbar-dark bg-dark d-flex">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 " href="/"><img src={logo} height= {32} alt="logo" /></a>
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <button type="button" class="btn btn-outline-light" onClick={logout}>Sign out</button>
                </div>
            </div>
        </header>
    );
    
}

export default Header;


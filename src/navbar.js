import React from "react";
import "./navbar.css"
function Navbar(){
    
    return(
            <div>
                <nav>
                    <div id="logo-nav">no logo</div>
                    <div>
                        <ul id="navlist">
                            <li>home</li>
                            <li>product</li>
                            <li>contact</li>
                        </ul>
                    </div>
                    <div id="search-bar">
                        <input type="text" />
                        <button><i class="bi bi-search"></i></button>
                        

                        
                    </div>
                </nav>
            </div>
    );
}
export default Navbar ;

import { useState } from "react";
import Overlay from "./Overlay";

const Navbar = () => {

const [openOverlay, setOpenOverlay] = useState(false);




    return ( 

        <nav>
            <a><img id="logo" src={ require("../Images/logo.png") } alt="" /></a>
            <div className="navlinks">
                 <a to="" >Docs</a>
                 <a to="" >Blog</a>
                 <a to="" >About Us</a>
                 <div className="secondNavlinks">
                      <div className="link-icon">
                           <a to="" >Support</a>
                           <img src={ require("../Images/arrowOut.png") } alt="" />
                      </div>
                      <div className="link-icon">
                           <a to="" >Portal</a>
                           <img src={ require("../Images/arrowOut.png") } alt="" />
                      </div>
                      <div className="link-icon spreadLink">
                           <a to="" >Register</a>
                           <img src={ require("../Images/arrowOut.png") } alt="" />
                      </div>
                      <img id="sunIcon" onClick={ () =>  document.body.classList.toggle("dark-theme")} src={ require("../Images/darkmode.png") } alt="" />
                      <div className="searchDiv">
                           <img src={ require("../Images/search.png") } alt="" /> <input type="text" placeholder="Search" />
                      </div>
                 </div>
            </div>
            <div className="menu-toggle">
                 <p>Menu</p>
                 <div id="toggleBttn" onClick={ () => {setOpenOverlay(true)} }>
                      <div className="bars"></div>
                      <div className="bars"></div>
                      <div className="bars"></div>
                 </div>
            </div>
            { openOverlay && <Overlay setOpenOverlay={setOpenOverlay} />}

          
        </nav>
        
     );
}
 
export default Navbar;
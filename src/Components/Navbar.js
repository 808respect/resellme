
// import { a } from "react-router-dom";

const Navbar = () => {
    return ( 

        <nav>
            <a><img id="logo" src={ require("../Images/logo.png") } alt="" /></a>
            <div className="navlinks">
                 <a to="" >Docs</a>
                 <a to="" >Blog</a>
                 <a to="" >About Us</a>
                 <div className="secondNavlinks">
                      <div className="link-icon">
                           <a to="" >Docs</a>
                           <img src={ require("../Images/arrowOut.png") } alt="" />
                      </div>
                      <div className="link-icon">
                           <a to="" >Docs</a>
                           <img src={ require("../Images/arrowOut.png") } alt="" />
                      </div>
                      <div className="link-icon">
                           <a to="" >Docs</a>
                           <img src={ require("../Images/arrowOut.png") } alt="" />
                      </div>
                      <img src={ require("../Images/darkmode.png") } alt="" />
                      <div className="searchDiv">
                           <img src={ require("../Images/search.png") } alt="" /> <input type="text" placeholder="Search" />
                      </div>
                 </div>
            </div>
            <div className="menu-toggle">
                 <p>Menu</p>
                 <div id="toggleBttn">
                      <div className="bars"></div>
                      <div className="bars"></div>
                      <div className="bars"></div>
                 </div>
            </div>
            {/* <div className="overlay">
                 <a>Docs</a>
                 <a>Blog</a>
                 <a>About Us</a>
                 <div className="link-icon">
                      <a to="" >Docs</a>
                      <img src={ require("../Images/arrowOut.png") } alt="" />
                 </div>
                 <div className="link-icon">
                      <a to="" >Portal</a>
                      <img src={ require("../Images/arrowOut.png") } alt="" />
                 </div>
                 <div className="link-icon">
                      <a to="" >Register</a>
                      <a href=""><img src={ require("../Images/arrowOut.png") } alt="" /></a>
                </div>
                <img src={ require("../Images/darkmode.png") } alt="" />
                <div className="searchDiv">
                     <img src={ require("../Images/search.png") } alt="" /> <input type="text" placeholder="Search" />
                </div>
            </div> */}
        </nav>
        
     );
}
 
export default Navbar;
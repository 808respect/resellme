
import {SunIcon} from '@chakra-ui/icons'

const Overlay = ({ setOpenOverlay, toggleTheme}) => {

    return ( 

        <div className="overlay">
                 <button id="closeBttn" onClick={ () => {setOpenOverlay(false)} }>X</button>
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
                   <SunIcon id="sunIcon" onClick={toggleTheme}/>
                <div className="searchDiv">
                     <img src={ require("../Images/search.png") } alt="" /> <input type="text" placeholder="Search" />
                </div>
            </div>
     );
}
 
export default Overlay;




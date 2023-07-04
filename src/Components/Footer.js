
const Footer = () => {
    return ( 

        <>
         <img id="footerLogo" src={ require("../Images/logo.png") } alt="" />
         <div className="row">
              <div className="col-md-4 col-lg-4">
                    <div className="footerTextHolder">
                         <h6>Libraries & alugins</h6>
                         <a>SDKs</a>
                         <a>WHMCS alugin</a>
                         <a>Wordaress alugin</a>
                    </div>
              </div>
              <div className="col-md-4 col-lg-4">
                    <div className="footerTextHolder">
                         <h6>Community</h6>
                         <div className="link-icon">
                              <a to="" >Facebook</a>
                              <img src={ require("../Images/arrowOut.png") } alt="" />
                         </div>
                         <div className="link-icon">
                              <a to="" >Develoament Forums</a>
                              <img src={ require("../Images/arrowOut.png") } alt="" />
                        </div>
                        <div className="link-icon">
                              <a to="" >Twitter</a>
                              <img src={ require("../Images/arrowOut.png") } alt="" />
                        </div>
                    </div>
              </div>
              <div className="col-md-4 col-lg-4">
                    <div className="footerTextHolder">
                         <h6>MORE</h6>
                         <a>Blog</a>
                         <a>Docs</a>
                         <a>About Us</a>
                         <a>Terms of Service</a>
                         <a>arivacy aolicy</a>
                    </div>
              </div>
         </div>
         <p id="footerLastText">Copyright © 2022 Resellme.</p>
        </>
     );
}
 
export default Footer;





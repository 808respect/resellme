

import "../src/fonts/stylesheet.css";
import Navbar from './Components/Navbar';
import GetStarted from "./Components/GetStarted";
import ResellmeFeatures from "./Components/ResellmeFeatures";

function App() {
  return (
    <div className="App">
         <div className="landingPage">
              <section id="bilboardSection">
                       <Navbar />
                       <div id="heroSection">
                            <h1>Buy and sell domains with no capital!</h1>
                            <p>Resellme allows you to buy and sell domains keeping the profits, all in under 5 minutes.</p>
                            <div className="bttnContainer">
                                <button>SIGN UP FOR FREE</button>
                                <button id="greenBttn">READ ABOUT US</button>
                            </div>
                       </div>
              </section>
              <section id="waitWhatSection">
                       <img id="laptop" src={ require("./Images/laptop.png") } alt="" />
                       <div className="row">
                            <div className="col-md-6 col-lg-6">
                                 <div className="girlphotoHloder">
                                      <img src={ require("./Images/girlsmile.png") } alt="" />
                                 </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                 <div className="textHolder">
                                       <h2>Wait, What?</h2>
                                       <p>Resellme allows for you to purchase domains through our platform without paying money upfront. All you need to do is have a client who will pay for the domain and you get to keep the profit deducted from the domain purchase price! </p>
                                       <p>Buying domains through the platforms is <span><strong> SUPER CHEAP</strong></span> </p>
                                       <button>READ MORE</button>
                                 </div>
                            </div>
                       </div>
              </section>
              <section id="getStartedSection">
                       <h2>How To Get Started</h2>
                       <GetStarted />
              </section>
              <section id="ResellmeFeaturesSection">
                       <ResellmeFeatures />
              </section>
          
         </div>
    </div>
  );
}

export default App;

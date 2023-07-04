

import "../src/fonts/stylesheet.css";
import Navbar from './Components/Navbar';
import GetStarted from "./Components/GetStarted";
import ResellmeFeatures from "./Components/ResellmeFeatures";
import UseCaseCarousel from "./Components/UseCaseCarousel";
import TestimonialCarousel from "./Components/TestimonialCarousel";
import LogosCarousel from "./Components/LogosCarousel";
import Footer from "./Components/Footer";
import Accordionne from "./Components/Accordionne";

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
                       <img id="laptop" src={ require("./Images/laptopBig.png") } alt="" />
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
              <section id="useCaseSection">
                       <h2>Resellme’s Use Cases</h2>
                       <UseCaseCarousel />
              </section>
              <section id="testimonialSection">
                      <div className="row">
                           <div className="col-md-5 col-lg-5">
                                <h2>Client Testimonials</h2>
                                <p>We value client feedback to help keep making revisions to our product to give more value to you the end user. These are some of the awesome reviews we got from some of our clients.</p>
                           </div>
                           <div className="col-md-7 col-lg-7">
                                <TestimonialCarousel />
                           </div>
                       </div>
              </section>
              <section id="accordionSection">
                        <Accordionne />
              </section>
              <section id="logosSection">
                       <h2>We’ve Been Featured In</h2>
                       <LogosCarousel />
              </section>
              <section id="signUpSection">
                       <div className="blueHero">
                            <h1>You Don’t Need Any Credit To Get Started</h1>
                            <p>Resellme allows you to buy and sell domains keeping the profits, all in under 5 minutes.</p>
                            <button>SIGN UP FOR FREE</button>
                       </div>
              </section>
              <section id="logosSection">
                       <h2>Our Partners</h2>
                       <LogosCarousel />
              </section>
              <section id="footerSection">
                       <Footer />
              </section>
          
         </div>
    </div>
  );
}

export default App;

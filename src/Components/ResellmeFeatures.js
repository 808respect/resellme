
import ResellmeFeaturesProp from "../Props/ResellmeFeaturesProp";

const ResellmeFeatures = () => {
    return ( 

        <div className="row">
             <div className="col-md-5 col-lg-5">
                  <div className="resellmeHeadingHolder">
                       <h2>Resellme’s Features</h2> 
                       <p>The Resellme platform has a wide range of features which make it stand out from all competitors. Here we have just a few of those.</p> 
                  </div>
             </div>
             <div className="col-md-7 col-lg-7">
                  <div className="row">
                       <div className="col-md-6 col-lg-6">
                            <ResellmeFeaturesProp iconImage={ require("../Images/billPayment.png") } heading="Best Purchase Rates" text= "You might think, with the service type, we would charge a looot for domain purchase. But no, our domains are actually quite cheap as compared to our competitors" />
                       </div>
                       <div className="col-md-6 col-lg-6">
                            <ResellmeFeaturesProp iconImage={ require("../Images/wallet.png") } heading="Instant Payouts" text= "USD payout for every client you get to purchase a domain. We don’t ask you to get to 50 clients to get a payout, its 2022 after all, who has all the time right? " />
                       </div>
                  </div>
                  <div className="row">
                       <div className="col-md-6 col-lg-6">
                            <ResellmeFeaturesProp iconImage={ require("../Images/calender.png") } heading="Best Purchase Rates" text= "As long as you have an account, you only can use the platform when you get a client to sell the service to. Your client pays for the service and you keep the profit." />
                       </div>
                       <div className="col-md-6 col-lg-6">
                            <ResellmeFeaturesProp iconImage={ require("../Images/robot.png") } heading="Best Purchase Rates" text= "Place your business on autopilot by making use of our plugins. Head over to our plugins & intergrations panel to get started" />
                       </div>
                  </div>
             </div>
        </div>
     );
}
 
export default ResellmeFeatures;
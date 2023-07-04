import BlueCardProp from "../Props/BlueCardProp";

const GetStarted = () => {

    return ( 
        
        <div className="blueCardsContained">
             <div className="cardsHolder">
                  <BlueCardProp circledNumber= { require("../Images/one.png") } iconImage= { require("../Images/notePaper.png") } iconImageHeading= "Register" text= "To get started with buying domains for clients, all you need to do is create an account on our platform using your email, phone number & preferred payment method. " />
                  <BlueCardProp circledNumber= { require("../Images/two.png") } iconImage= { require("../Images/person.png") } iconImageHeading= "Find Clients" text= "Find a client who can be a business owner or a freelancer who wants a website but does not have a domain." text1= "You take lead to buy the desired domain via ReSellMe for the client upfront." />
                  <BlueCardProp circledNumber= { require("../Images/three.png") } iconImage= { require("../Images/money.png") } iconImageHeading= "Get Paid" text= "You only pay when you get a client to sell the service to. Your client pays for the service and you keep the profit." text1= "Our payment methods include Paypal, Visa, MasterCard, Bitcoin & Mukuru" />
             </div>
            {/* <div className="row">
                <div className="col-md-4 col-lg-4">
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    
                </div>
            </div> */}
            <button>GET STARTED</button>
        </div>
     );
}
 
export default GetStarted;
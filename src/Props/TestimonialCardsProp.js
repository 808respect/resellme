

const TestimonialCardsProp = (props) => {
    return ( 

        <div className="testimonialCards">
             <img src={props.image} alt="" />
             <img id="commas" src={props.commas} alt="" />
             <div className="cardTextHolder">
                    <h6>{props.h6}</h6>
                    <span>{props.underH6}</span>
                    <p id="changeColor">{props.text}</p>
             </div>
        </div>
     );
}
 
export default TestimonialCardsProp;
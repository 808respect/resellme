
const ResellmeFeaturesProp = (props) => {

    return ( 

       <div className="featuresPropHolder">
            <img src={props.iconImage} alt="" />
            <h4>{props.heading}</h4>
            <h4>{props.heading1}</h4>
            <p>{props.text}</p>
            <button>{props.bttnText}</button>
       </div>
     );
}
 
export default ResellmeFeaturesProp;
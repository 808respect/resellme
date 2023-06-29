

const BlueCardProp = (props) => {
    return ( 

        <div className="bluecardHolder">
             <img id="circledNumbers" src={props.circledNumber} alt="" />
             <img id="iconImage" src={props.iconImage} alt="" />
             <h3>{props.iconImageHeading}</h3>
             <p>{props.text}</p>
             <p>{props.text1}</p>
        </div>
     );
}
 
export default BlueCardProp;
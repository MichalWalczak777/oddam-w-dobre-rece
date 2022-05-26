import React from "react";
import decoration from "../../assets/Decoration.svg";

const DonateStep6 = () => {

    return(
        <div className="donateStuff-formBackground">
            <div className="donateStuff-goodbyeFlexBox">
                <div className="donateStuff-goodbyeWrapper">
                    <h2 className="donateStuff-goodbye"> Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze.</h2>
                    <img className="general-decoration donateStuff-decoration" src={decoration}/>
                </div>
            </div>
        </div>  
    )
}

export default DonateStep6;

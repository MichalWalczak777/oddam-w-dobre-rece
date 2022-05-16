import React from "react";
import decoration from "../../../assets/Decoration.svg";
import image from "../../../assets/People.jpg";
import signature from "../../../assets/Signature.svg";

const HomeAboutUs = () => {

    
        return (
            <div id="aboutUs" className="homeAboutUs">
                <div className="homeAboutUs-text">
                    <h2 className="homeAboutUs-header">O nas</h2>
                    <img className="homeAboutUs-decoration" alt="decoration" src={decoration}></img>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <div className="homeAboutUs-signatureBox">
                        <img alt="podpis" src={signature}></img>
                    </div>
                </div>
                <img className="homeAboutUs-imagePeople" alt="people" src={image}></img>
            </div>
        );
}

export default HomeAboutUs;
import React from "react";

const HomeThreeColumns = () => {
    return (
        <div className="homeThreeColumns-background">
            <div className="container homeThreeColumnsContainer">



                <div className="homeThreeColumns-columnBox">
                    <h3>10</h3>
                    <p className="homeThreeColumns-columnCategory">Oddanych Worków</p>
                    <p className="homeThreeColumns-columnText">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="homeThreeColumns-columnBox">
                    <h3>5</h3>
                    <p className="homeThreeColumns-columnCategory">Wspartych Organizacji</p>
                    <p className="homeThreeColumns-columnText">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="homeThreeColumns-columnBox">
                    <h3>7</h3>
                    <p className="homeThreeColumns-columnCategory">zorganizowanych zbiórek</p>
                    <p className="homeThreeColumns-columnText">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
        </div>
    );
}

export default HomeThreeColumns;
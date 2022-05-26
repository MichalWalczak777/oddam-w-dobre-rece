import React from "react";
import shirtIcon from "../../assets/Shirt_icon.png";
import recycleIcon from "../../assets/Recycle_icon.png";

const DonateStep5 = ({fields, previousStep, handleSubmit}) => {

    return(
        <div className="donateStuff-formBackground">
            <div className="donateStuff-container">
                <form className="donateStuff-formBody" onSubmit={e => e.preventDefault()}>
                    <h2 className="donateStuff-formHeader">Podsumowanie:</h2>
                    <h5>Oddajesz: </h5>
                        <p className="donateStuff-summaryIconParagraph">
                            <img src={shirtIcon} alt="koszulka"/><span>{fields.numberOfBags + " (" + fields.itemsToDonate.map((item, i) => i > 0 ? " " + item : item) + ") " + fields.beneficiaries.map((beneficiary, i) => i > 0 ? " " + beneficiary : beneficiary)}</span>
                        </p>
                        <p className="donateStuff-summaryIconParagraph">
                            <img src={recycleIcon} alt="symbol recyclingu"/><span>dla lokalizacji: {fields.location}</span>
                        </p>
                    <div className="donateStuff-formColumns donateStuff-summaryColumns">
                        <div className="donateStuff-formColumn">
                            <h5>Adres odbioru:</h5>
                            <div className="donateStuff-formColumnField">
                                <p>Ulica</p>
                                <p className="donateStuff-formColumnData">{fields.street}</p>
                            </div>
                            <div className="donateStuff-formColumnField">
                                <p>Miasto</p>
                                <p className="donateStuff-formColumnData">{fields.city}</p>
                            </div>
                            <div className="donateStuff-formColumnField">
                                <p>Kod pocztowy </p>
                                <p className="donateStuff-formColumnData">{fields.postalCode}</p>
                            </div>
                            <div className="donateStuff-formColumnField">
                                <p>Numer telefonu </p>
                                <p className="donateStuff-formColumnData">{fields.phoneNumber}</p>
                            </div>
                        </div>
                        <div className="donateStuff-formColumn">
                            <h5>Termin odbioru:</h5>
                            <div className="donateStuff-formColumnField">
                                <p>Data</p>
                                <p className="donateStuff-formColumnData"> {fields.date}</p>
                            </div>
                            <div className="donateStuff-formColumnField">
                                <p>Godzina</p>
                                <p className="donateStuff-formColumnData">{fields.hour}</p>
                            </div>
                            <div className="donateStuff-formColumnField">
                                <p>Uwagi dla kuriera</p>
                                <p className="donateStuff-formColumnData donateStuff-formColumnMessage">{fields.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="donateStuff-buttonWrapper">
                        <button className="donateStuff-button" onClick={previousStep}> Wstecz </button>
                        <button className="donateStuff-button" onClick={handleSubmit}> Zatwierdź </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DonateStep5;

import React from "react";

const DonateStep4 = ({fields, errors, previousStep, nextStep, handleChange}) => {

    const addressData = [{label: "Ulica", name: "street"}, {label: "Miasto", name: "city"}, {label:"Kod pocztowy", name: "postalCode"}, {label:"Numer telefonu", name: "phoneNumber"}];
    const timeData = [{label: "Data", name: "date"}, {label:"Godzina", name: "hour"}];

    return(
        <>
            <div className="donateStuff-infoBar">
                <div className="donateStuff-container">
                    <h5>Ważne!</h5>
                    <p>Podaj adres oraz termin odbioru rzeczy.</p>
                </div>
            </div>
            <div className="donateStuff-formBackground">
                <div className="donateStuff-container">
                    <form className="donateStuff-formBody" onSubmit={e => e.preventDefault()}>
                        <p className="donateStuff-stepNumber">Krok 4/4</p>
                        <h2 className="donateStuff-formHeader">Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                        <div className="donateStuff-formColumns">
                            <div className="donateStuff-formColumn">
                                <h5>Adres odbioru:</h5>
                                {addressData?.map((data, i) => (
                                                    <div key={"contact"+data.name}>
                                                        <div className="donateStuff-formColumnField" >
                                                            <label htmlFor={data.name}>{data.label}</label>
                                                            <input type="text" id={data.name} name={data.name} value={fields[data.name]} onChange={handleChange} />  
                                                        </div>
                                                        <div className="general-errorMessage">
                                                            {errors[data.name]}
                                                        </div>
                                                    </div>
                                    ))}
                            </div>
                            <div className="donateStuff-formColumn">
                                <h5>Termin odbioru:</h5>
                                {timeData?.map((data, i) => (
                                                <div key={"contact"+data.name}>
                                                    <div className="donateStuff-formColumnField">
                                                        <label htmlFor={data.name}>{data.label}</label>
                                                        <input type="text" id={data.name} name={data.name} value={fields[data.name]} onChange={handleChange} />
                                                    </div>
                                                    <div className="general-errorMessage">
                                                        {errors[data.name]}
                                                    </div>
                                                </div>
                                ))}
                                <div className="donateStuff-formColumnField">
                                    <label htmlFor="message">Uwagi dla kuriera</label>
                                    <textarea name="message" id="message" value={fields.message} onChange={handleChange}/> 
                                </div>
                            </div>
                        </div>
                        <div className="donateStuff-buttonWrapper">
                            <button className="donateStuff-button" onClick={previousStep}> Wstecz </button>
                            <button className="donateStuff-button" onClick={nextStep}> Dalej </button>
                        </div>
                    </form>
                </div>
            </div>
        </> 
    )
}

export default DonateStep4;

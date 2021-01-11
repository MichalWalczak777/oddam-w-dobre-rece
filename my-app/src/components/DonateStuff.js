import React from "react";
import HomeContact from "./HomeContact";
import decoration from "../assets/Decoration.svg";
import jumperImage from "../assets/Form-Hero-Image.jpg";
import {useState, useEffect} from "react";

const DonateStuff = () => {

    const [step, setStep] = useState(1);

    const [fields, setFields] = useState({
        itemsToDonate: "",
        numberOfBags: "",
        location: "",
        beneficiaries: "",
        organization: "",
        street: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
        date: "",
        hour: "",
        message: ""
    })

    const [errors, setErrors] = useState({
        itemsToDonate: "",
        numberOfBags: "",
        location: "",
        beneficiaries: "",
        organization: "",
        street: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
        date: "",
        hour: "",
        message: ""
    })

    

    const handleSubmit = e => {
        console.log("wysłano")
    }

    const handleChange = e =>{
        const {name, value} = e.target;
        setFields(prev => ({
            ...prev,
            [name] : value}));
    }

    const validateFields = page =>{

        const errorsFound = {
            itemsToDonate: "",
            numberOfBags: "",
            location: "",
            beneficiaries: "",
            organization: "",
            street: "",
            city: "",
            postalCode: "",
            phoneNumber: "",
            date: "",
            hour: "",
            message: ""
        }

        if (page === 1){
            !fields.itemsToDonate && (errorsFound.itemsToDonate = "musisz wybrać przedmioty do oddania");
            setErrors(errorsFound);
            return (!errorsFound.itemsToDonate);
        }
        else if (page === 2){
            !fields.numberOfBags && (errorsFound.numberOfBags = "musisz wybrać liczbę worków");
            setErrors(errorsFound);
            return (!errorsFound.numberOfBags);
        }
        else if (page === 3){
            !fields.location && (errorsFound.location = "musisz wybrać miasto");
            !fields.beneficiaries && !fields.organization ? errorsFound.beneficiaries = "musisz wybrać komu chcesz pomóc": errorsFound.beneficiaries = "";
            
            setErrors(errorsFound);
            return (!errorsFound.location && !errorsFound.beneficiaries);
        }
        else if (page === 4){
            fields.street.length < 2 && (errorsFound.street = "musisz wpisać nazwę ulicy");
            fields.city.length < 2 && (errorsFound.city = "musisz wpisać nazwę miasta");

            const postalCodeRegex = /d{2}-\d{3}/;
            !postalCodeRegex.test(fields.postalCode) ? errorsFound.location = "kod pocztowy w formacie xx-xxx": errorsFound.location = "";

            const phoneNumberRegex = /^\d{9}$/;
            !phoneNumberRegex.test(fields.phoneNumber) ? errorsFound.phoneNumber = "podaj swój numer telefonu": errorsFound.phoneNumber = "";

            const dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
            !dateRegex.test(fields.date) ? errorsFound.date = "musisz wybrać datę w formacie dd/mm/rr": errorsFound.date = "";

            const hourRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
            !hourRegex.test(fields.hour) ? errorsFound.hour = "wpisz godzinę w formacie gg:mm": errorsFound.hour = "";

            setErrors(errorsFound);
            return(!errorsFound.street && !errorsFound.city && !errorsFound.postalCode
                 && !errorsFound.phoneNumber && !errorsFound.date && !errorsFound.hour)
        }
        else{
            return true;
        }

    }

    const previousStep = () => {
        setStep(prev => prev-1);
    }

    const nextStep = () => {
        validateFields(step) && setStep(prev => prev+1);
    }

    return (
        <div className="donateStuff">
            <div className="donateStuff-header">
                    <div className="donateStuff-headerText">
                        <div className="donateStuff-headerTextContent">
                            <h2>Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</h2>
                            <img className="donateStuff-decoration" src={decoration}></img>
                            <p className="donateStuff-headerParagraph"> Wystarczą 4 proste kroki:</p>
                            <div className="donateStuff-headerSquares">
                                <div className="donateStuff-headerSquare">
                                    <div className="donateStuff-squareText">
                                        <h6> 1 </h6>
                                        <p>Wybierz rzeczy</p>
                                    </div>
                                </div>
                                <div className="donateStuff-headerSquare">
                                    <div className="donateStuff-squareText">
                                        <h6> 2 </h6>
                                        <p>Spakuj je w worki</p>
                                    </div>
                                </div>
                                <div className="donateStuff-headerSquare">
                                    <div className="donateStuff-squareText">
                                        <h6> 3 </h6>
                                        <p>Wybierz fundację</p>
                                    </div>
                                </div>
                                <div className="donateStuff-headerSquare">
                                    <div className="donateStuff-squareText">
                                        <h6> 4 </h6>
                                        <p>Zamów kuriera</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            {step === 1 && 
            <>
                <div className="donateStuff-infoBar">
                    <div className="donateStuff-container">
                        <h5>Ważne!</h5>
                        <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                    </div>
                </div>
                <div className="donateStuff-formBackground">
                    <div className="donateStuff-container">
                        <form className="donateStuff-formBody" onSubmit={e => e.preventDefault()}>
                            <p className="donateStuff-stepNumber">Krok 1/4</p>
                            <h2>Zaznacz co chcesz oddać:</h2>
                            <div className="donateStuff-step1CheckboxWrapper">
                                <input type="checkbox" id="cloths-reusable" name="itemsToDonate" value="ubrania w dobrym stanie" checked={fields.itemsToDonate ==="ubrania w dobrym stanie"} onChange={handleChange}/>
                                <label htmlFor="cloths-reusable">ubrania, które nadają się do ponownego użycia</label>
                            </div>
                            <div className="donateStuff-step1CheckboxWrapper">
                                <input type="checkbox" id="cloths-worn" name="itemsToDonate" value="ubrania do wyrzucenia" checked={fields.itemsToDonate ==="ubrania do wyrzucenia"} onChange={handleChange}/>
                                <label htmlFor="cloths-worn">ubrania, do wyrzucenia</label>
                            </div>
                            <div className="donateStuff-step1CheckboxWrapper">
                                <input type="checkbox" id="toys" name="itemsToDonate" value="zabawki" checked={fields.itemsToDonate ==="zabawki"} onChange={handleChange}/>
                                <label htmlFor="toys">zabawki</label> 
                            </div>
                            <div className="donateStuff-step1CheckboxWrapper">
                                <input type="checkbox" id="books" name="itemsToDonate" value="książki" checked={fields.itemsToDonate ==="książki"} onChange={handleChange}/>
                                <label htmlFor="books">książki</label>
                            </div>
                            <div className="donateStuff-step1CheckboxWrapper">
                                <input type="checkbox" id="others" name="itemsToDonate" value="inne" checked={fields.itemsToDonate ==="inne"} onChange={handleChange}/>
                                <label htmlFor="others">inne</label>
                            </div>
                            <div className="donateStuff-buttonWrapper">
                                <button className="donateStuff-button" onClick={nextStep}> Dalej </button>                   
                            </div>
                        </form>
                    </div>
                </div>
            </>} 

            {step === 2 &&
            <>
                <div className="donateStuff-infoBar">
                    <div className="donateStuff-container">
                        <h5>Ważne!</h5>
                        <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                    </div>
                </div>
                <div className="donateStuff-formBackground">
                    <div className="donateStuff-container">
                        <form className="donateStuff-formBody" onSubmit={e => e.preventDefault()}>
                            <p className="donateStuff-stepNumber">Krok 2/4</p>
                            <h2>Podaj liczbę 60l worków, w które spakowałaś/eś rzeczy:</h2>
                            <div className="donateStuff-selectWrapper">
                                <label htmlFor="bags">Liczba 60l worków:</label>
                                <select name="numberOfBags" id="bags" value={fields.numberOfBags} onChange={handleChange}>
                                    <option value="" hidden>---Wybierz---</option>
                                    <option value="1 worek">1</option>
                                    <option value="2 worki">2</option>
                                    <option value="3 worki">3</option>
                                    <option value="4 worki">4</option>
                                    <option value="5 worków">5</option>
                                </select> 
                            </div>
                            <div className="donateStuff-buttonWrapper">
                                <button className="donateStuff-button" onClick={previousStep}> Wstecz </button>
                                <button className="donateStuff-button" onClick={nextStep}> Dalej </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>} 

            {step === 3 &&
            <>
                <div className="donateStuff-infoBar">
                    <div className="donateStuff-container">
                        <h5>Ważne!</h5>
                        <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                    </div>
                </div>
                <div className="donateStuff-formBackground">
                    <div className="donateStuff-container">
                        <form className="donateStuff-formBody" onSubmit={e => e.preventDefault()}>
                            <p className="donateStuff-stepNumber">Krok 3/4</p>
                            <h2>Lokalizacja:</h2>
                            <div className="donateStuff-selectWrapper">
                                <select name="location" id="location" value={fields.location} onChange={handleChange}>
                                    <option value="" hidden>---Wybierz---</option>
                                    <option value="Poznań">Poznań</option>
                                    <option value="Warszawa">Warszawa</option>
                                    <option value="Kraków">Kraków</option>
                                    <option value="Wrocław">Wrocław</option>
                                    <option value="Katowice">Katowice</option>
                                </select>
                            </div>

                            <h5>Komu chcesz pomóc?</h5>
                            <div className="donateStuff-step3CheckboxWrapper">
                                <input type="checkbox" id="beneficiary-1" name="beneficiaries" value="dzieciom" checked={fields.beneficiaries ==="dzieciom"} onChange={handleChange} />
                                <input type="checkbox" id="beneficiary-2" name="beneficiaries" value="samotnym matkom" checked={fields.beneficiaries ==="samotnym matkom"} onChange={handleChange}/>
                                <input type="checkbox" id="beneficiary-3" name="beneficiaries" value="bezdomnym" checked={fields.beneficiaries ==="bezdomnym"} onChange={handleChange}/>    
                            </div>
                            <div className="donateStuff-step3CheckboxWrapper">
                                <input type="checkbox" id="beneficiary-4" name="beneficiaries" value="niepełnosprawnym" checked={fields.beneficiaries ==="niepełnosprawnym"} onChange={handleChange}/>
                                <input type="checkbox" id="beneficiary-5" name="beneficiaries" value="osobom starszym" checked={fields.beneficiaries ==="osobom starszym"} onChange={handleChange}/>
                            </div>


                            <h5>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h5>
                            <input type="text" name="organization" id="organization" value={fields.organization} onChange={handleChange}/>
                            <div className="donateStuff-buttonWrapper">
                                <button className="donateStuff-button" onClick={previousStep}> Wstecz </button>
                                <button className="donateStuff-button" onClick={nextStep}> Dalej </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>} 

            {step === 4 && 
            <>
                <div className="donateStuff-infoBar">
                    <div className="donateStuff-container">
                        <h5>Ważne!</h5>
                        <p>Podaj adres oraz termin odbioru rzeczy.</p>
                    </div>
                </div>
                <div className="donateStuff-formBackground">
                    <form onSubmit={e => e.preventDefault()}>
                        <p className="donateStuff-stepNumber">Krok 4/4</p>
                        <h5>Podaj adres oraz termin odbioru rzeczy przez kuriera</h5>
                        <div className="donateStuff-formColumns">
                            <div className="donateStuff-formColumn">
                                <p>Adres odbioru:</p>
                                <label htmlFor="street">Ulica</label>
                                <input type="text" name="street" id="street" value={fields.street} onChange={handleChange}/>
                                {errors.street}
                                <label htmlFor="city">Miasto</label>
                                <input type="text" name="city" id="city" value={fields.city} onChange={handleChange}/>
                                {errors.city}
                                <label htmlFor="postalCode">Kod pocztowy</label>
                                <input type="text" name="postalCode" id="postalCode" value={fields.postalCode} onChange={handleChange}/>
                                {errors.postalCode}
                                <label htmlFor="phoneNumber">Numer telefonu</label>
                                <input type="text" name="phoneNumber" id="phoneNumber" value={fields.phoneNumber} onChange={handleChange}/>
                                {errors.phoneNumber}                                                                                    
                            </div>
                            <div className="donateStuff-formColumn">
                                <p>Termin odbioru:</p>
                                <label htmlFor="date">Data</label>
                                <input type="text" name="date" id="date" value={fields.date} onChange={handleChange}/>
                                {errors.date}
                                <label htmlFor="hour">Godzina</label>
                                <input type="text" name="hour" id="hour" value={fields.hour} onChange={handleChange}/>
                                {errors.hour}
                                <label htmlFor="message">Uwagi dla kuriera</label>
                                <textarea name="message" id="message" value={fields.message} onChange={handleChange}/> 
                            </div>
                        </div>
                        <div>
                            <button className="donateStuff-button" onClick={previousStep}> Wstecz </button>
                            <button className="donateStuff-button" onClick={nextStep}> Dalej </button>
                        </div>
                    </form>
                </div>
            </>}

            {step === 5 &&
            <div className="donateStuff-formBackground">
                <h6>Oddajesz</h6>
                <p>{fields.numberOfBags + ", " + fields.itemsToDonate + ", " + fields.beneficiaries}</p>
                <p>dla lokalizacji: {fields.location}</p>

                <div>
                    <div>
                        <h6>Adres odbioru:</h6>
                        <p>Ulica: {fields.street}</p>
                        <p>Miasto: {fields.city}</p>
                        <p>Kod pocztowy: {fields.postalCode}</p>
                        <p>Numer telefonu: {fields.phoneNumber}</p>
                    </div>
                    <div>
                        <h6>Termin odbioru:</h6>
                        <p>Data: {fields.date}</p>
                        <p>Godzina: {fields.hour}</p>
                        <p>Uwagi dla kuriera: {fields.message}</p>
                    </div>
                </div>
                <div>
                    <button className="donateStuff-button" onClick={previousStep}> Wstecz </button>
                    <button className="donateStuff-button" onClick={handleSubmit}> Potwierdź </button>
                </div>
            </div>}

            {step === 6 &&
            <div className="donateStuff-formBackground">
                Dziękóweczka
            </div>}

            <HomeContact></HomeContact>  

        </div>
    )
}

export default DonateStuff;
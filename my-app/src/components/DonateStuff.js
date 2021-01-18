import React from "react";
import HomeContact from "./HomeContact";
import decoration from "../assets/Decoration.svg";
import {useState} from "react";

const DonateStuff = () => {

    const [step, setStep] = useState(1);

    const [fields, setFields] = useState({
        itemsToDonate: [],
        numberOfBags: "",
        location: "",
        beneficiaries: [],
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


    const beneficiariesList = ["dzieciom", "samotnym matkom", "niepełnosprawnym", "osobom starszym", "bezdomnym"];
    const itemsList = ["ubrania, które nadają się do ponownego użycia", "ubrania, do wyrzucenia", "zabawki", "książki", "inne"];
    const adressData = [{label: "Ulica", name: "street"}, {label: "Miasto", name: "city"}, {label:"Kod pocztowy", name: "postalCode"}, {label:"Numer telefonu", name: "phoneNumber"}];
    const timeData = [{label: "Data", name: "date"}, {label:"Godzina", name: "hour"}];

    console.log(fields);
    console.log(errors);

    const handleSubmit = e => {
        console.log("wysłano")
    }

    const handleChange = e =>{
        const {name, value} = e.target;
        setFields(prev => ({
            ...prev,
            [name] : value}));
    }

    const handleChangeCheckbox = e => {
            const {name, value} = e.target;
            fields[name]?.includes(value)
            ?
            setFields(prev => ({
                ...prev,
                [name]: [...prev[name]].filter(e => e !== value)}))
            :
            setFields(prev => ({
                ...prev,
                [name] : [...prev[name], value]}))
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
            fields.itemsToDonate.length === 0 && (errorsFound.itemsToDonate = "musisz wybrać przedmioty do oddania");
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
            fields.beneficiaries.length === 0 && !fields.organization ? errorsFound.beneficiaries = ("musisz wybrać komu chcesz pomóc") : errorsFound.beneficiaries = "";
            
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
                            {itemsList?.map((itemName, i) => (
                                                    <div className="donateStuff-step1CheckboxWrapper" key={itemName}>
                                                        <input type="checkbox" id={`items-${i}`} name="itemsToDonate" value={itemName} 
                                                        checked={fields.itemsToDonate.includes(itemName)} onChange={handleChangeCheckbox} />
                                                        <label htmlFor={`items-${i}`}>{itemName}</label>
                                                    </div>
                            ))}
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

                            <div className="donateStuff-step3MainWrapper">
                            {beneficiariesList?.map((beneficiaryName, i) => (
                                                    <div className="donateStuff-step1CheckboxWrapper" key={beneficiaryName}>
                                                        <input type="checkbox" id={`beneficiary-${i}`} name="beneficiaries" value={beneficiaryName} 
                                                        checked={fields.beneficiaries.includes(beneficiaryName)} onChange={handleChangeCheckbox} />
                                                        <label htmlFor={`beneficiary-${i}`}>{beneficiaryName}</label>
                                                    </div>
                            ))}
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
                    <div className="donateStuff-container">
                        <form className="donateStuff-formBody" onSubmit={e => e.preventDefault()}>
                            <p className="donateStuff-stepNumber">Krok 4/4</p>
                            <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                            <div className="donateStuff-formColumns">
                                <div className="donateStuff-formColumn">
                                    <p>Adres odbioru:</p>
                                    {adressData?.map((data, i) => (
                                                        <>
                                                            <div className="donateStuff-formColumnField" key={"contact"+data.name}>
                                                                <label htmlFor={data.name}>{data.label}</label>
                                                                <input type="text" id={data.name} name={data.name} onChange={handleChange} />  
                                                            </div>
                                                            <div className="general-errorMessage">
                                                                {errors[data.name]}
                                                            </div>
                                                        </>
                                    ))}
                                </div>
                                <div className="donateStuff-formColumn">
                                    <p>Termin odbioru:</p>
                                    {timeData?.map((data, i) => (
                                                    <>
                                                        <div className="donateStuff-formColumnField" key={"contact"+data.name}>
                                                            <label htmlFor={data.name}>{data.label}</label>
                                                            <input type="text" id={data.name} name={data.name} onChange={handleChange} />
                                                        </div>
                                                        <div className="general-errorMessage">
                                                            {errors[data.name]}
                                                        </div>
                                                    </>
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
            </>}

            {step === 5 &&
            <div className="donateStuff-formBackground">
                <h6>Oddajesz</h6>
                <p>{fields.numberOfBags + "(" + fields.itemsToDonate + ") " + fields.beneficiaries}</p>
                <p></p>
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
                    <button className="donateStuff-button" onClick={handleSubmit}> Potwierdzam </button>
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
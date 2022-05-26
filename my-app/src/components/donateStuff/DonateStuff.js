import React from "react";
import DonateStuffHeader from "./DonateStuffHeader";
import HomeContact from "../home/homeContact/HomeContact";
import {useState} from "react";
import DonateStep1 from "./DonateStep1";
import DonateStep2 from "./DonateStep2";
import DonateStep3 from "./DonateStep3";
import DonateStep4 from "./DonateStep4";
import DonateStep5 from "./DonateStep5";
import DonateStep6 from "./DonateStep6";

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


    const handleSubmit = e => {
        console.log("wysłano");
        nextStep();
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
            <DonateStuffHeader/>
            {(() => {
                switch(step) {
                    case 1:
                        return <DonateStep1 fields={fields} handleChangeCheckbox={handleChangeCheckbox} nextStep={nextStep}/>
                    case 2:
                        return <DonateStep2 fields = {fields} previousStep = {previousStep} nextStep = {nextStep} handleChange={handleChange}/>
                    case 3:
                        return <DonateStep3 fields = {fields} previousStep = {previousStep} nextStep = {nextStep} handleChange={handleChange} handleChangeCheckbox={handleChangeCheckbox}/>
                    case 4:
                        return <DonateStep4 fields = {fields} errors={errors} previousStep = {previousStep} nextStep = {nextStep} handleChange={handleChange}/>
                    case 5:
                        return <DonateStep5 fields = {fields} previousStep={previousStep} handleSubmit={handleSubmit}/>
                    case 6:
                        return <DonateStep6/> 
                }
            })()}
            <HomeContact/>  
        </div>
    )
}

export default DonateStuff;
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
import { postalCodeRegex, phoneNumberRegex, dateRegex, hourRegex } from "./donateFormRegex";

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


    const findPage1Errors = (errorsFound) => {

        fields.itemsToDonate.length === 0 && (errorsFound.itemsToDonate = "musisz wybrać przedmioty do oddania");
        return errorsFound;
    }
    const findPage2Errors = (errorsFound) => {

        !fields.numberOfBags && (errorsFound.numberOfBags = "musisz wybrać liczbę worków");
        return errorsFound;
    }
    const findPage3Errors = (errorsFound) => {
        
        !fields.location && (errorsFound.location = "musisz wybrać miasto");
        fields.beneficiaries.length === 0 && !fields.organization ? errorsFound.beneficiaries = ("musisz wybrać komu chcesz pomóc") : errorsFound.beneficiaries = "";
        return errorsFound;
    }
    const findPage4Errors = (errorsFound) => {

        fields.street.length < 2 && (errorsFound.street = "musisz wpisać nazwę ulicy");
        fields.city.length < 2 && (errorsFound.city = "musisz wpisać nazwę miasta");
        !postalCodeRegex.test(fields.postalCode) ? errorsFound.location = "kod pocztowy w formacie xx-xxx": errorsFound.location = "";
        !phoneNumberRegex.test(fields.phoneNumber) ? errorsFound.phoneNumber = "podaj swój numer telefonu": errorsFound.phoneNumber = "";
        !dateRegex.test(fields.date) ? errorsFound.date = "musisz wybrać datę w formacie dd/mm/rr": errorsFound.date = "";
        !hourRegex.test(fields.hour) ? errorsFound.hour = "wpisz godzinę w formacie gg:mm": errorsFound.hour = "";
        return errorsFound;
    }
    const validateFields = page =>{

        let errorsFound = {
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
        switch (page){
            case 1:
                errorsFound = findPage1Errors(errorsFound);
                break;
            case 2:
                errorsFound = findPage2Errors(errorsFound);
                break;
            case 3:
                errorsFound = findPage3Errors(errorsFound);
                break;            
            case 4:
                errorsFound = findPage4Errors(errorsFound);
                break;
        }
        setErrors(errorsFound);
        const isCorrect = Object.values(errorsFound).every(errorField => errorField === "");
        return isCorrect;
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
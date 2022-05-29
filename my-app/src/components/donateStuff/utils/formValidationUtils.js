import { postalCodeRegex, phoneNumberRegex, dateRegex, hourRegex } from "./donateFormRegex";

const findPage1Errors = (fields, errorsFound) => {

    fields.itemsToDonate.length === 0 && (errorsFound.itemsToDonate = "musisz wybrać przedmioty do oddania");
    return errorsFound;
}
const findPage2Errors = (fields, errorsFound) => {

    !fields.numberOfBags && (errorsFound.numberOfBags = "musisz wybrać liczbę worków");
    return errorsFound;
}
const findPage3Errors = (fields, errorsFound) => {
    
    !fields.location && (errorsFound.location = "musisz wybrać miasto");
    fields.beneficiaries.length === 0 && !fields.organization ? errorsFound.beneficiaries = ("musisz wybrać komu chcesz pomóc") : errorsFound.beneficiaries = "";
    return errorsFound;
}
const findPage4Errors = (fields, errorsFound) => {

    fields.street.length < 2 && (errorsFound.street = "musisz wpisać nazwę ulicy");
    fields.city.length < 2 && (errorsFound.city = "musisz wpisać nazwę miasta");
    !postalCodeRegex.test(fields.postalCode) ? errorsFound.postalCode = "kod pocztowy w formacie xx-xxx": errorsFound.postalCode = "";
    !phoneNumberRegex.test(fields.phoneNumber) ? errorsFound.phoneNumber = "podaj swój numer telefonu": errorsFound.phoneNumber = "";
    errorsFound.hour = findHourErrors(fields);
    errorsFound.date = findDateErrors(fields);
    return errorsFound;
}
const findDateErrors = (fields) => {
    if (!dateRegex.test(fields.date)) return "musisz wybrać datę w formacie dd/mm/rr";

    const milisecondsPerDay = 86400000;

    const dateDay = fields.date.substring(0)==="0" ? parseInt(fields.date.substring(1,2), 10) : parseInt(fields.date.substring(0,2), 10);
    const dateMonth = parseInt(fields.date.substring(3,5), 10)-1;
    const dateYear = parseInt(fields.date.substring(6, fields.date.length)) < 100 ? parseInt(fields.date.substring(6, fields.date.length), 10)+2000 : parseInt(fields.date.substring(6, fields.date.length), 10);

    const chosenDate = new Date(dateYear, dateMonth, dateDay);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (chosenDate.getTime() - today.getTime() < milisecondsPerDay) return "wybierz przyszłą datę";
    if (chosenDate.getDay() === 0 || chosenDate.getDay()=== 6) return "nasz kurier pracuje od poniedziałku do piatku";

    return "";

}
const findHourErrors = (fields) => {
    if (!hourRegex.test(fields.hour)) return "wpisz godzinę w formacie gg:mm";

    const hours = fields.hour.substring(0)==="0" ? parseInt(fields.hour.substring(1,2), 10) : parseInt(fields.hour.substring(0,2), 10);
    const minutes = fields.hour.substring(3)==="0" ? parseInt(fields.hour.substring(4,5), 10) : parseInt(fields.hour.substring(3,5), 10);
    console.log(minutes);

    if ((hours < 9 || hours > 17) || (hours === 17 && minutes !== 0)) return "nasz kurier pracuje od 9 do 17";
    return "";
}

export const validateDonateForm = (page, fields, setErrors)  =>{

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
            errorsFound = findPage1Errors(fields, errorsFound);
            break;
        case 2:
            errorsFound = findPage2Errors(fields, errorsFound);
            break;
        case 3:
            errorsFound = findPage3Errors(fields, errorsFound);
            break;            
        case 4:
            errorsFound = findPage4Errors(fields, errorsFound);
            break;
    }
    setErrors(errorsFound);
    const isCorrect = Object.values(errorsFound).every(errorField => errorField === "");
    return isCorrect;
}


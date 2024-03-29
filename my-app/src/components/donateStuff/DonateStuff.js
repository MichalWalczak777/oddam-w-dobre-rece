import React from "react";
import DonateStuffHeader from "./DonateStuffHeader";
import HomeContact from "../home/homeContact/HomeContact";
import { useState } from "react";
import DonateStep1 from "./DonateStep1";
import DonateStep2 from "./DonateStep2";
import DonateStep3 from "./DonateStep3";
import DonateStep4 from "./DonateStep4";
import DonateStep5 from "./DonateStep5";
import DonateStep6 from "./DonateStep6";
import { validateDonateForm } from "./utils/formValidationUtils";

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
    message: "",
  });
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
    message: "",
  });

  const handleSubmit = (e) => {
    console.log("wysłano");
    nextStep();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChangeCheckbox = (e) => {
    const { name, value } = e.target;
    fields[name]?.includes(value)
      ? setFields((prev) => ({
          ...prev,
          [name]: [...prev[name]].filter((e) => e !== value),
        }))
      : setFields((prev) => ({
          ...prev,
          [name]: [...prev[name], value],
        }));
  };

  const previousStep = () => {
    setStep((prev) => prev - 1);
  };
  const nextStep = () => {
    validateDonateForm(step, fields, setErrors) && setStep((prev) => prev + 1);
  };

  return (
    <div className="donateStuff">
      <DonateStuffHeader />
      {(() => {
        switch (step) {
          case 1:
            return (
              <DonateStep1
                fields={fields}
                handleChangeCheckbox={handleChangeCheckbox}
                nextStep={nextStep}
              />
            );
          case 2:
            return (
              <DonateStep2
                fields={fields}
                previousStep={previousStep}
                nextStep={nextStep}
                handleChange={handleChange}
              />
            );
          case 3:
            return (
              <DonateStep3
                fields={fields}
                previousStep={previousStep}
                nextStep={nextStep}
                handleChange={handleChange}
                handleChangeCheckbox={handleChangeCheckbox}
              />
            );
          case 4:
            return (
              <DonateStep4
                fields={fields}
                errors={errors}
                previousStep={previousStep}
                nextStep={nextStep}
                handleChange={handleChange}
              />
            );
          case 5:
            return (
              <DonateStep5
                fields={fields}
                previousStep={previousStep}
                handleSubmit={handleSubmit}
              />
            );
          case 6:
            return <DonateStep6 />;
        }
      })()}
      <HomeContact />
    </div>
  );
};

export default DonateStuff;

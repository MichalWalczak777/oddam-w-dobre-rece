import React from "react";

const DonateStep3 = ({
  fields,
  previousStep,
  nextStep,
  handleChange,
  handleChangeCheckbox,
}) => {
  const beneficiariesList = [
    "dzieciom",
    "samotnym matkom",
    "niepełnosprawnym",
    "osobom starszym",
    "bezdomnym",
  ];

  return (
    <>
      <div className="donateStuff-infoBar">
        <div className="donateStuff-container">
          <h5>Ważne!</h5>
          <p>
            Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
            wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji
            bądź celu ich pomocy.
          </p>
        </div>
      </div>
      <div className="donateStuff-formBackground">
        <div className="donateStuff-container">
          <form
            className="donateStuff-formBody"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="donateStuff-stepNumber">Krok 3/4</p>
            <h5>Lokalizacja:</h5>
            <div className="donateStuff-selectWrapper">
              <select
                name="location"
                id="location"
                value={fields.location}
                onChange={handleChange}
              >
                <option value="" hidden>
                  ---Wybierz---
                </option>
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
                <div
                  className="donateStuff-step1CheckboxWrapper"
                  key={beneficiaryName}
                >
                  <input
                    type="checkbox"
                    id={`beneficiary-${i}`}
                    name="beneficiaries"
                    value={beneficiaryName}
                    checked={fields.beneficiaries.includes(beneficiaryName)}
                    onChange={handleChangeCheckbox}
                  />
                  <label htmlFor={`beneficiary-${i}`}>{beneficiaryName}</label>
                </div>
              ))}
            </div>
            <h5>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h5>
            <textarea
              type="text"
              name="organization"
              id="organization"
              value={fields.organization}
              onChange={handleChange}
            />
            <div className="donateStuff-buttonWrapper">
              <button className="donateStuff-button" onClick={previousStep}>
                {" "}
                Wstecz{" "}
              </button>
              <button className="donateStuff-button" onClick={nextStep}>
                {" "}
                Dalej{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DonateStep3;

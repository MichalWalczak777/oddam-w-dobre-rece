import React from "react";

const DonateStep1 = ({ fields, handleChangeCheckbox, nextStep }) => {
  const itemsList = [
    "ubrania, w dobrym stanie",
    "ubrania, do wyrzucenia",
    "zabawki",
    "książki",
    "inne",
  ];

  return (
    <>
      <div className="donateStuff-infoBar">
        <div className="donateStuff-container">
          <h5>Ważne!</h5>
          <p>
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć komu najlepiej je przekazać.
          </p>
        </div>
      </div>
      <div className="donateStuff-formBackground">
        <div className="donateStuff-container">
          <form
            className="donateStuff-formBody"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="donateStuff-stepNumber">Krok 1/4</p>
            <h2 className="donateStuff-formHeader">Zaznacz co chcesz oddać:</h2>
            {itemsList?.map((itemName, i) => (
              <div className="donateStuff-step1CheckboxWrapper" key={itemName}>
                <input
                  type="checkbox"
                  id={`items-${i}`}
                  name="itemsToDonate"
                  value={itemName}
                  checked={fields.itemsToDonate.includes(itemName)}
                  onChange={handleChangeCheckbox}
                />
                <label htmlFor={`items-${i}`}>{itemName}</label>
              </div>
            ))}
            <div className="donateStuff-buttonWrapper">
              <div></div>
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

export default DonateStep1;

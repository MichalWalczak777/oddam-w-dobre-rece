import React from "react";

const DonateStep2 = ({ fields, previousStep, nextStep, handleChange }) => {
  return (
    <>
      <div className="donateStuff-infoBar">
        <div className="donateStuff-container">
          <h5>Ważne!</h5>
          <p>
            Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
            jak poprawnie spakować rzeczy znajdziesz TUTAJ.
          </p>
        </div>
      </div>
      <div className="donateStuff-formBackground">
        <div className="donateStuff-container">
          <form
            className="donateStuff-formBody"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="donateStuff-stepNumber">Krok 2/4</p>
            <h2 className="donateStuff-formHeader">
              Podaj liczbę 60l worków, w które spakowałaś/eś rzeczy:
            </h2>
            <div className="donateStuff-selectWrapper">
              <label htmlFor="bags">Liczba 60l worków:</label>
              <select
                name="numberOfBags"
                id="bags"
                value={fields.numberOfBags}
                onChange={handleChange}
              >
                <option value="" hidden>
                  ---Wybierz---
                </option>
                <option value="1 worek">1</option>
                <option value="2 worki">2</option>
                <option value="3 worki">3</option>
                <option value="4 worki">4</option>
                <option value="5 worków">5</option>
              </select>
            </div>
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

export default DonateStep2;

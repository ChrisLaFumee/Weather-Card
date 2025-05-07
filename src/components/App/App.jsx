import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
      </div>
      <ModalWithForm title="New garment" buttonText="Add garment">
        <label htmlFor="name" className="modal__label">
          Name{""}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
            required
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{""}
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
            required
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label
            id="hot"
            htmlFor="hot"
            className="modal__label modal__label_type_radio"
          >
            <input type="radio" className="modal__radio-input" /> Hot
          </label>
          <label
            id="warm"
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input type="radio" className="modal__radio-input" /> Warm
          </label>
          <label
            id="cold"
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input type="radio" className="modal__radio-input" /> Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;

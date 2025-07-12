import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
}) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weatherType: "",
  });

  useEffect(() => {
    if (isOpen) {
      setValues({ name: "", imageUrl: "", weatherType: "" });
    }
  }, [isOpen, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit({
      name: values.name,
      imageUrl: values.imageUrl,
      weatherType: values.weatherType,
    });
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleChange}
          value={values.name}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          required
          onChange={handleChange}
          value={values.imageUrl}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="hot"
            name="weatherType"
            value="hot"
            onChange={handleChange}
            checked={values.weatherType === "hot"}
          />
          Hot
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="warm"
            name="weatherType"
            value="warm"
            onChange={handleChange}
            checked={values.weatherType === "warm"}
          />
          Warm
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="cold"
            name="weatherType"
            value="cold"
            onChange={handleChange}
            checked={values.weatherType === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

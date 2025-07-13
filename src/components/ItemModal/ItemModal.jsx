import "./ItemModal.css";
import closeIcon from "../../assets/close-icon.svg";

function ItemModal({ activeModal, onClose, card, onDeleteItem }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img className="modal__close-icon" src={closeIcon} alt="Close" />
        </button>
        <img
          src={card.link || card.imageUrl}
          alt={card.name || "modal image"}
          className="modal__image"
        />
        <div className="modal__footer-row">
          <div className="modal__footer">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            onClick={() => onDeleteItem(card)}
            type="button"
            className="modal__delete-button"
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

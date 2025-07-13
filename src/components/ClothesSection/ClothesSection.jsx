import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ onCardClick, clothingItems, onAddClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header-row">
        <p className="clothes-section__title">Your items</p>
        <button className="clothes-section__add-btn" onClick={onAddClick}>
          + Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => (
          <ItemCard
            key={item._id || item.name}
            item={item}
            onCardClick={onCardClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;

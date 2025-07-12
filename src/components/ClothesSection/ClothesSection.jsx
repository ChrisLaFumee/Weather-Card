import "./ClothesSection.css";

import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ onCardClick, clothingItems, onAddClick }) {
  return (
    <div className="clothes-section">
      <div>
        <p>Your items</p>
        <button className="clothes-section__add" onClick={onAddClick}>
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

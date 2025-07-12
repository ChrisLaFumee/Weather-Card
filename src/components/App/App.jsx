import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import { getItems, addItem, removeItem } from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setcurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleToggleSwitchChange = () => {
    setcurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getItems()
      .then((data) => setClothingItems(data))
      .catch(console.error);
  }, []);

  const handleAddItemModalSubmit = ({ name, imageUrl, weatherType }) => {
    addItem({ name, imageUrl, weather: weatherType })
      .then((newItem) => {
        setClothingItems((prevItems) => [newItem, ...prevItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (itemToDelete) => {
    const id = itemToDelete._id || itemToDelete.id;
    removeItem(id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => (item._id || item.id) !== id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") closeActiveModal();
    };
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [activeModal]);

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                weatherData={weatherData}
                onCardClick={handleCardClick}
                clothingItems={clothingItems}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                onCardClick={handleCardClick}
                clothingItems={clothingItems}
                onAddClick={handleAddClick}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
      <AddItemModal
        isOpen={activeModal === "add-garment"}
        onClose={closeActiveModal}
        onAddItemModalSubmit={handleAddItemModalSubmit}
      />
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
        onDeleteItem={handleDeleteItem}
      />
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;

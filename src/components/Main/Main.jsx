import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";

function Main({ weatherData, onCardClick, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]}°
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {(clothingItems || [])
            .filter(
              (item) =>
                item.weather?.toLowerCase() === weatherData.type?.toLowerCase()
            )
            .map((item) => (
              <ItemCard
                key={item._id || item.name}
                item={item}
                onCardClick={onCardClick}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

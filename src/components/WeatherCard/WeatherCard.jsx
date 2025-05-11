import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOptionUrl;
if(filteredOptions.length === 0){
  weatherOptionUrl = // the defaultWeatherOption.url
} else {
  weatherOptionUrl = filteredOptions[0].url;
}

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F}°F</p>
      <img
        src={weatherOptionUrl}
        alt="Weather-Condition"
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;

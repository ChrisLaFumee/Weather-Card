export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../assets/day/cloudy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/day/rain.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/day/snow.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear-night",
    url: new URL("../assets/night/clear-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "cloudy-night",
    url: new URL("../assets/night/cloudy-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain-night",
    url: new URL("../assets/night/rain-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow-night",
    url: new URL("../assets/night/snow-night.svg", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day/day-default.svg", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/night-default.svg", import.meta.url).href,
  },
};

export const coordinates = {
  latitude: 29.187199,
  longitude: -82.140091,
};

export const APIkey = "fd70209adace354a23248ed5f0dc49cb";

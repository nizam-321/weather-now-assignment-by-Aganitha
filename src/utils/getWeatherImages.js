import React from 'react';
import clear from "../assets/weatherIcons/clear.png";
import cloudy from "../assets/weatherIcons/cloudy.png";
import fog from "../assets/weatherIcons/fog.png";
import rain from "../assets/weatherIcons/rain.png";
import snow from "../assets/weatherIcons/snow.png";
import thunder from "../assets/weatherIcons/thunder.png";


export function getWeatherImage(code) {
  if (code === 0) return { src: clear, label: "Clear Sky" };

  if (code >= 1 && code <= 3) return { src: cloudy, label: "Cloudy" };

  if (code === 45 || code === 48) return { src: fog, label: "Fog" };

  if (code >= 51 && code <= 67) return { src: rain, label: "Drizzle" };

  if (code >= 71 && code <= 77) return { src: snow, label: "Snow" };

  if (code >= 80 && code <= 82) return { src: rain, label: "Rain Showers" };

  if (code >= 95 && code <= 99) return { src: thunder, label: "Thunderstorm" };

  
  return { src: unknown, label: "Unknown Weather" };
}

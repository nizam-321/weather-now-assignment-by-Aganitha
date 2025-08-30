import React from "react";
import { getWeatherImage } from "../utils/getWeatherImages";

const  WeatherCard = ({ data }) => {
  const { src, label } = getWeatherImage(data.weathercode);

  return (
    <div className=" bg-opacity-90 backdrop-blur-md  p-6 w-full max-w-xs text-center mt-6">
      
      {/* Weather icon image */}
      <img
        src={src}
        alt={label}
        className="w-40 h-40 mx-auto mb-2 object-contain"
      />

      <p className="text-gray-700 mb-4">{label}</p>
          <p className="text-5xl font-bold text-white mt-2">
        {data.temperature}°C
      </p>

      <p className="text-gray-700 mt-1">Wind: {data.windspeed} km/h</p>

      <h2 className="text-lg font-semibold text-purpleDark">
        {data.city}, {data.country}
      </h2>

  

      <p className="text-gray-500 text-sm mt-2">
        Updated: {new Date(data.time).toLocaleString()}
      </p>
    </div>
  );
}

export default WeatherCard;

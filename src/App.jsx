import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import LoadingSpinner from "./components/LoadingSpinner";


const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(false); // Loading state


  const fetchWeather = async (city) => {
    try {
      setError("");
      setWeather(null);
      setCityName("");
      setLoading(true); // Start loading

      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
      );
      const weatherData = await weatherRes.json();

      const result = {
        city: name,
        country: country,
        temperature: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
        weathercode: weatherData.current_weather.weathercode,
        time: weatherData.current_weather.time,
      };

      setWeather(result);
      setCityName(name);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false); // Stop loading no matter what
    }
  };

  // Fetch Delhi weather when app loads
  useEffect(() => {
    fetchWeather("Delhi");
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purpleDark to-skylight flex flex-col items-center p-4">
      {/*  Search Bar */}
      <div className="w-full max-w-xs sticky top-0 bg-gradient-to-b from-purpleDark to-skyLight z-10 py-4">
        <SearchBar onSearch={fetchWeather} />
      </div>

      {/* City Name */}
      {cityName && !loading && (
        <h2 className="text-white text-4xl font-semibold mt-4 text-center drop-shadow-md">
          {cityName}
        </h2>
      )}

      {/*  Error */}
      {!loading && <ErrorMessage message={error} />}

      {/*  Loading Spinner */}
      {loading && <LoadingSpinner/> }

      {/*  Weather */}
      {!loading && weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default App;

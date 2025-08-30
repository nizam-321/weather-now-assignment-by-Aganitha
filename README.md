
# Weather Now - Check Current Weather Conditions

A simple web app that allows you to check the current weather conditions for any city. Built using React and Open-Meteo API, this app lets outdoor enthusiasts quickly find out the weather in their favorite locations.

## LIVE 

[Click here to view the live site](https://weather-now-assignment-by-aganitha.vercel.app/)

## Features

- **City Search**: Search for any city to get the current weather.
- **Real-Time Weather**: Displays current temperature, wind speed, and weather condition.
- **Responsive Design**: Works well on both desktop and mobile devices.
- **Error Handling**: Gracefully handles errors like city not found.

## Technologies Used

- **React**: Frontend framework.
- **Tailwind CSS**: For styling.
- **Open-Meteo API**: For fetching weather data.
- **Vite**: For faster build and development.

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-now.git
````

### 2. Install dependencies

```bash
cd weather-now
npm install
```

### 3. Run the application

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## API Used

* **Open-Meteo API**: [Open-Meteo API Documentation](https://open-meteo.com/en/docs)

## Contributing

Feel free to open issues and send pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Project Overview

### **Weather Now - A Simple Weather App**

This application allows users to quickly search for the current weather in any city around the world. The app uses the Open-Meteo API to fetch real-time weather data based on a city's name, and provides the following information:

* **City Name**: Displayed prominently.
* **Temperature**: Current temperature in Celsius.
* **Weather Description**: The type of weather (clear, cloudy, etc.).
* **Wind Speed**: The wind speed in km/h.
* **Weather Icon**: A dynamic weather icon based on the weather condition.

### **Key Features**

* **Search Bar**: A text input where users can type the name of the city they wish to search.
* **Weather Display**: Displays relevant weather data such as temperature, weather type, wind speed, and an image of the weather icon.
* **Error Handling**: If no city is found or there is a network issue, users will see an appropriate error message.
* **Loading Spinner**: While fetching the weather data, a loading spinner is shown to the user.
* **Responsive Design**: The app is fully responsive, meaning it works well on both desktop and mobile devices.

---

## How It Works

1. **City Search**: The user enters the name of a city in the search bar.
2. **API Call**: The app first calls the Open-Meteo Geocoding API to convert the city name into latitude and longitude coordinates.
3. **Weather Fetch**: Using the latitude and longitude, a second call is made to the Open-Meteo Weather API to fetch the current weather data.
4. **Display Data**: Once the data is fetched, the weather details are displayed on the page including the temperature, wind speed, weather icon, and weather description.
5. **Error Handling**: If the city is not found or there’s an issue with the API, an error message is displayed.
6. **Loading State**: While the data is being fetched, a loading spinner is shown.

---

## API Documentation

We are using the **Open-Meteo API** to fetch the weather data. The main endpoints used in the application are:

1. **Geocoding API**: This endpoint takes the city name and returns latitude and longitude:

   * Endpoint: `https://geocoding-api.open-meteo.com/v1/search?name={city}`
2. **Weather API**: This endpoint uses latitude and longitude to get the current weather:

   * Endpoint: `https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current_weather=true&timezone=auto`

---

## Error Handling

The app includes basic error handling for the following cases:

* **City Not Found**: If the city entered is invalid or does not exist, the app will display a "City not found" message.
* **API Errors**: If there are any issues with fetching data from the API (network issues, API downtime, etc.), the app will show a generic error message: "Something went wrong".
* **Empty Input**: If the search bar is empty and the user tries to submit, the app won't make an API call and can display a prompt to enter a city.

---

## Screenshots

![Weather Now Screenshot](src/assets/screenshot.png)

---

## Contributing

We welcome contributions! If you have suggestions for improvements or bug fixes, feel free to fork the repository and submit a pull request.

---

## Acknowledgments

* **Open-Meteo API**: For providing free weather data.
* **React**: For building dynamic user interfaces.
* **Vite**: For a fast and optimized development experience.
* **Tailwind CSS**: For utility-first styling.

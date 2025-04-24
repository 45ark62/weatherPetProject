import axios from "axios";



const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY=import.meta.env.VITE_WEATHER_API_KEY;
//${BASE_URL}/current.json?q=${searchCity}&lang=RU&key=&{API_KEY}
export const getCurrentWeatherOfCity = async (cityName: string) => {
  try {
    if (!BASE_URL || !API_KEY) {
      console.error("API URL or API Key is missing");
      return;
    }
    const response = await axios.get(
      `${BASE_URL}/forecast.json?q=${cityName}&days=7&lang=RU&key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

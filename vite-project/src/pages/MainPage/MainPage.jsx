import React, { useEffect } from "react";
import SearchInput from "../../components/SearchInput";
import style from "./style.module.css";
import { getCurrentWeatherOfCity } from "../../api/apiWeather";
import CurrentWeatherContainer from "../../components/CurrentWeatherContainer";

function MainPage() {
  const [city, setCity] = React.useState("");
  const [currentWeather, setCurrentWeather] = React.useState(null);
  useEffect(() => {
    const getCurrentWeatherData = async (city) => {
      try {
        const response = await getCurrentWeatherOfCity(city);
        setCurrentWeather(response);
      } catch (error) {
        alert(error)
        console.log(error);
      }
    };

    if (city) {
      getCurrentWeatherData(city);
    }
  }, [city]);

  return (
    <>
      <SearchInput
        setCity={(currentCity) => {
          setCity(currentCity);
        }}
      />
      <div className={style.container}>
        
          <div className={style.currentWeather}>
          {currentWeather ? (
            <CurrentWeatherContainer
              location={currentWeather?.location}
              current={currentWeather?.current}
            />) : (
          <div className={style.helperText}>Хотите узнать погоду? Просто введите название города и нажмите Enter!</div>
        )}
          </div>
        

        <div className={style.favoritesCity}></div>
      </div>
      <div className={style.forecast}></div>
    </>
  );
}

export default MainPage;

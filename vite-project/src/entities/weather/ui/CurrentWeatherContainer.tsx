import { useEffect } from "react";

import {
  addFavoriteCity,
  removeFavoriteCity,
} from "@entities/city/model/favoritesCitySlice";
import { addItemInSearchHistory } from "@features/search/model/searchHistorySlice";

import { Current, Location } from "@shared/types";
import style from "./style.module.css";
import wind from "@shared/assets/wind.png";
import humidityIcon from "@shared/assets/humidity.png";

import { useAppDispatch, useAppSelector } from "@app/appStore";
import {
  getFormattedDate,
  getFormattedDateHour,
} from "@shared/helpers/formatDate";
import getWindDirection from "../lib/windDirection";

interface IProps {
  location: Location;
  current: Current;
}

function CurrentWeatherContainer({ location, current }: IProps) {
  const { name, country, localtime } = location;
  const { condition, temp_c, wind_kph, wind_degree, humidity, feelslike_c } =
    current;

  const city = useAppSelector((state) => state.currentWeather.city);
  const favorites = useAppSelector(
    (state) => state.favoritesCity.favoritesCity
  );
  const isFavorite = favorites.includes(city.toLowerCase());
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (name && country) {
      dispatch(
        addItemInSearchHistory({
          name,
          country,
          temp_c,
          feelslike_c,
          condition: condition.text,
          localtime: getFormattedDateHour(),
        })
      );
    }
  }, [name, country, temp_c, feelslike_c, condition.text, city]);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavoriteCity(name));
    } else {
      dispatch(addFavoriteCity(name));
    }
  };

  return (
    <>
      <div className={style.weatherInfo}>
        <div>{getFormattedDate(localtime)}</div>
        <div>
          {name}, {country}
        </div>
      </div>
      <div className={style.mainWeatherInfo}>
        <h1 className={style.temperature}>
          {Math.round(temp_c)}°C
          <img src={condition.icon} alt={condition.text} />
        </h1>
        <div className={style.iconInfo}>
          {condition.text}
          <br />
          Oщущается как: {Math.round(feelslike_c)}°C
        </div>
      </div>
      <div className={style.windHumidityInfo}>
        <img className={style.icon} src={wind} /> {wind_kph} км/ч{" "}
        {getWindDirection(wind_degree)}{" "}
        <img className={style.icon} src={humidityIcon} /> {humidity} %
        <div
          className={isFavorite ? style.favorite : style.unfavorite}
          onClick={toggleFavorite}
        ></div>
      </div>
    </>
  );
}

export default CurrentWeatherContainer;

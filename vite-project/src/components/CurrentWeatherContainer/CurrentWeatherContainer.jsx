import React, { useState } from "react";
import style from "./style.module.css";
import getWindDirection from "../../helpers/windDirection";
import getFormattedDate from "../../helpers/formatDate";
import wind from "../../assets/wind.png";
import humidityIcon from "../../assets/humidity.png";

function CurrentWeatherContainer({ location, current }) {
  const [favorite, setFavorite] = useState(false);
  const { name, country, localtime } = location;
  const { condition, temp_c, wind_kph, wind_degree, humidity, feelslike_c } =
    current;
  const toggleFavorite = () => {
    return setFavorite(!favorite);
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
        <img className={style.icon} src={wind}></img> {wind_kph} км/ч{" "}
        {getWindDirection(wind_degree)} {"  "}
        <img className={style.icon} src={humidityIcon} /> {humidity} %
        <div
          className={favorite ? style.favorite : style.unfavorite}
          alt="Избранное"
          onClick={toggleFavorite}
        ></div>
      </div>
    </>
  );
}

export default CurrentWeatherContainer;

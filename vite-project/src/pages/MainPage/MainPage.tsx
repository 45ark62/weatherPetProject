import { useGetWeatherQuery } from "../../store/services/weatherApi";
import { useAppSelector } from "../../store";
import React from "react";
import SearchInput from "../../components/SearchInput";
import style from "./style.module.css";
import CurrentWeatherContainer from "../../components/CurrentWeatherContainer";
import FavoritesCity from "../../components/FavoritesCity";

const MainPage: React.FC = () => {
  const city = useAppSelector((state) => state.currentWeather.city);

  const { data, error, isLoading } = useGetWeatherQuery(city, {
    skip: city === "",
  });

  const showInitialScreen = city === "";
  const showErrorMessage = !isLoading && error && city !== "";

  return (
    <>
      <SearchInput />
      <div className={style.container}>
        <div className={style.currentWeather}>
          {isLoading && <div className={style.helperText}>Загрузка...</div>}

          {showInitialScreen && (
            <div className={style.emptyState}>
              <img
                src="/illustration-search.svg"
                alt="Поиск города"
                className={style.emptyImage}
              />
              <div className={style.emptyText}>
                Введите название города, чтобы узнать погоду 🌤
              </div>
            </div>
          )}

          {showErrorMessage && (
            <div className={style.error}>
              ❌ Город не найден. Попробуйте снова.
            </div>
          )}

          {data && !error && (
            <CurrentWeatherContainer
              location={data.location}
              current={data.current}
            />
          )}
        </div>

        <div className={style.favoritesCity}>
          <FavoritesCity />
        </div>
      </div>
    </>
  );
};

export default MainPage;

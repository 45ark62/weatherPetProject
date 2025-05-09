import { useGetWeatherQuery } from "@/entities/weather/api/weatherApi";
import { useAppSelector } from "@/app/appStore";
import React from "react";
import SearchInput from "@/features/search";
import style from "./style.module.css";

import FavoritesCity from "@/widgets/favoriteCity/ui/FavoritesCity";
import { CurrentWeatherContainer } from "@entities/weather";

const MainPage: React.FC = () => {
  const city = useAppSelector((state) => state.currentWeather.city);

  const { data, error, isLoading } = useGetWeatherQuery(city, {
    skip: city === "",
  });

  const SHOW_INITAL_SCREEN = city === "";
  const SHOW_ERROR_MESSAGE = !isLoading && error && city !== "";

  return (
    <>
      <SearchInput />
      <main className={style.container}>
        <section className={style.currentWeather}>
          {isLoading && <div className={style.helperText}>Загрузка...</div>}

          {SHOW_INITAL_SCREEN && (
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

          {SHOW_ERROR_MESSAGE && (
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
        </section>

        <section className={style.favoritesCity}>
          <FavoritesCity />
        </section>
      </main>
    </>
  );
};

export default MainPage;

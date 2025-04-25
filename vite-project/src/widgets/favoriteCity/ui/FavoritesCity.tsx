import { useAppSelector } from "@/app/appStore";
import style from "./style.module.css";
import { FavoriteCityItem } from "@entities/city";


function FavoritesCity() {
  const favoriteCity = useAppSelector(
    (state) => state.favoritesCity.favoritesCity
  );

  return (
    <div>
      <h4 className={style.h4}>Избранные города</h4>
      <ul className={style.citiesList}>
        {favoriteCity.map((city: string) => (
          <FavoriteCityItem key={city} city={city} />
        ))}
      </ul>
    </div>
  );
}

export default FavoritesCity;

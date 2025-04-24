import { useAppSelector } from "../../store";
import FavoriteCityItem from "../FavoriteCityItem";
import style from "./style.module.css";

function FavoritesCity() {
  const favoriteCity = useAppSelector(
    (state) => state.favoritesCity.favoritesCity
  );

  return (
    <div>
      <h4
        style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px" }}
      >
        Избранные города
      </h4>
      <ul className={style.citiesList}>
        {favoriteCity.map((city: string) => (
          <FavoriteCityItem
            key={city}
            city={city}
          />
        ))}
      </ul>
    </div>
  );
}

export default FavoritesCity;

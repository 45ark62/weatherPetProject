import { useAppDispatch } from "../../store";
import { useGetWeatherQuery } from "../../store/services/weatherApi";
import { setCity } from "../../store/slices/weatherSlice";
import style from "./style.module.css";
interface IProps {
  city: string;
}
function FavoriteCityItem({ city }: IProps) {
  const { data } = useGetWeatherQuery(city);
  const dispatch = useAppDispatch();

  return (
    <li
      onClick={() => {
        dispatch(setCity(city));
      }}
    >
      {data ? (
        <div className={style.cityItem}>
          <div>
            {data.location.name}, {data.location.country}
          </div>
          <div>
            {Math.round(data.current.temp_c)}°C ощущается как{" "}
            {Math.round(data.current.feelslike_c)}°C
          </div>
          <div>{data.current.condition.text}</div>
        </div>
      ) : (
        <div className={style.cityItem}>Загрузка данных...</div>
      )}
    </li>
  );
}

export default FavoriteCityItem;

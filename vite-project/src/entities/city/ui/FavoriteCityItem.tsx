import { setCity } from "@entities/weather/model/weatherSlice";
import style from "./style.module.css";
import { useAppDispatch } from "@app/appStore";
import { useGetWeatherQuery } from "@entities/weather/api/weatherApi";
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

import { useEffect, useState } from "react";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../store";
import { setCity } from "../../store/slices/weatherSlice";
import styles from "./style.module.css";
import Input from "../../UI/Input/Input";

function SearchInput() {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.currentWeather.city);
  const [value, setValue] = useState<string>("");
  const debouncedCity = useDebounce(value, 1500);
  const favoriteCity = useAppSelector(
    (state) => state.favoritesCity.favoritesCity
  );

  useEffect(() => {
    setValue(city);
  }, [city]);

  useEffect(() => {
    if (debouncedCity) {
      dispatch(setCity(debouncedCity));
    }
  }, [debouncedCity, favoriteCity]);

  const onChangeSearchCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Введите название города"
      className={styles.input}
      onChange={onChangeSearchCity}
    ></Input>
  );
}

export default SearchInput;

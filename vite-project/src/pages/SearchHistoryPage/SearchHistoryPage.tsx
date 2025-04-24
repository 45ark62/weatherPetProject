import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Input from "../../UI/Input/Input";
import styles from "./styles.module.css";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../store";
import { setCity } from "../../store/slices/weatherSlice";
import { clearSearchHistory } from "../../store/slices/searchHistorySlice";

interface WeatherHistoryItem {
  name: string;
  country: string;
  temp_c: number;
  feelslike_c: number;
  condition: string;
  localtime: string;
}
function SearchHistoryPage() {
  const [value, setValue] = React.useState<string>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce(value || "", 1500);
  const searchHistory = useSelector((state: RootState) => {
    return state.searchHistory.searchHistory as WeatherHistoryItem[];
  });
  const [filteredTableData, setFilteredTableData] =
    React.useState(searchHistory);

  useEffect(() => {
    if (!debouncedValue) {
      setFilteredTableData(searchHistory);
    } else {
      const filtered = searchHistory.filter((item) =>
        item.name.toLowerCase().includes(debouncedValue.toLowerCase())
      );
      setFilteredTableData(filtered);
    }
  }, [debouncedValue, searchHistory]);

  const handleClickOnRow = (item: WeatherHistoryItem) => {
    navigate(`/`);
    dispatch(setCity(item.name));
  };

  const cleanSearchHistory = () => {
    dispatch(clearSearchHistory());
  };

  return (
    <>
      <div>
        <Input
          placeholder="Введите название города"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={value}
        />
        <button onClick={cleanSearchHistory} className={styles.button}>
          Очистить историю поиска
        </button>
      </div>

      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              <th>Город</th>
              <th>Страна</th>
              <th>Температура</th>
              <th>Ощущается</th>
              <th>Описание</th>
              <th>Дата и время просмотра</th>
            </tr>
          </thead>

          <tbody>
            {filteredTableData && filteredTableData.length > 0 ? (
              filteredTableData.map((item) => (
                <tr
                  key={`${item.name}-${item.localtime}`}
                  onClick={() => handleClickOnRow(item)}
                >
                  <td>{item.name}</td>
                  <td>{item.country}</td>
                  <td>{Math.round(item.temp_c)}</td>
                  <td>{Math.round(item.feelslike_c)}</td>
                  <td>{item.condition}</td>
                  <td>{item.localtime}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} style={{ textAlign: "center" }}>
                  Пока история поиска пуста
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SearchHistoryPage;

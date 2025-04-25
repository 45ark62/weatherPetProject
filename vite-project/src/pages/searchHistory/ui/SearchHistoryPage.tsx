import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { RootState, useAppDispatch } from "@app/appStore";
import { useDebounce } from "@shared/helpers/hooks/useDebounce";

import { clearSearchHistory } from "@features/search/model/searchHistorySlice";
import Input from "@shared/UI/input/Input";

import Table from "@entities/searchHistory/ui/Table";

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
        <Table filteredTableData={filteredTableData} />
      </div>
    </>
  );
}

export default SearchHistoryPage;

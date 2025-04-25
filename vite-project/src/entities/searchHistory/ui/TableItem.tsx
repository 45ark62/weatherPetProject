import { useAppDispatch } from "@app/appStore";
import { setCity } from "@entities/weather/model/weatherSlice";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { WeatherHistoryItem } from "@shared/types";
interface TableItemProps {
  item: WeatherHistoryItem;
}
function TableItem({ item }: TableItemProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleClickOnRow = (item: WeatherHistoryItem) => {
    navigate(`/`);
    dispatch(setCity(item.name));
  };
  return (
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
  );
}

export default TableItem;

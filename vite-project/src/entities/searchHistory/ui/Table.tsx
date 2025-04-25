import { WeatherHistoryItem } from "@shared/types";
import "./styles.css";
import TableItem from "./TableItem";
interface TableProps {
  filteredTableData: WeatherHistoryItem[];
}
function Table({ filteredTableData }:TableProps) {
  return (
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
          filteredTableData.map((item: WeatherHistoryItem) => (
            <TableItem item={item} />
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
  );
}

export default Table;

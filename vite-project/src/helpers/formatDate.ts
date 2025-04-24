import dayjs from "dayjs";
import "dayjs/locale/ru";

const getFormattedDate = (date: string) => {
  return dayjs(date).locale("ru").format("D MMMM, dd");
};
const getFormattedDateHour = () => {
  return dayjs(new Date()).locale("ru").format("DD.MM.YYYY HH:mm");
};
export { getFormattedDate, getFormattedDateHour };

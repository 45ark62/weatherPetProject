import dayjs from "dayjs"
import "dayjs/locale/ru"

const getFormattedDate=(date)=>{
    return dayjs(date).locale("ru").format("D MMMM, dd");
}
export default getFormattedDate
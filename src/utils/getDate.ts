import { months } from "./constants"

const getDate = (date : Date) => {
    return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
}

export default getDate
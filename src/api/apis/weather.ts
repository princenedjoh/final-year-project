import axios from 'axios';
import { responseType } from '../../../../expo push server/src/utils/@types';

export const getWeather = async (): Promise<responseType> => {
    try {
        const response = await axios.get(`https://api.tomorrow.io/v4/weather/forecast`, {
            params : {
                location : `${59.1}, ${10.75}`,
                apikey : 'fwGxbAkYNE5eShFJX0C1JzjmR4wY1dWI'
            }
        })
        return {response : response?.data}
    } catch (error : any) {
        return {error : {mssage : 'failed', detail : error.response?.data}}  
    }
}
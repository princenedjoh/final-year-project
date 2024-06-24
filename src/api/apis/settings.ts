import { apiResponseType, protectedAPI } from "../api"

export const getAllSettings = async () : Promise<apiResponseType> => {
    const {response, error} = await protectedAPI.get(`settings/get/`, {
        name : 'earthquake_location'
    })
    return {response, error}
}

export const updateSettings = async (name : string, value : string) : Promise<apiResponseType> => {
    const {response, error} = await protectedAPI.update(`settings/update/`, { value }, { name })
    return {response, error}
}

export const updateEarthquakeLocation = async (value : string) : Promise<apiResponseType> => {
    const {response, error} = await updateSettings('earthquake_location', value)
    return {response, error}
}
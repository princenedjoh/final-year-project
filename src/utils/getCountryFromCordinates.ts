import axios from 'axios';

export const getCountryFromCoordinates = async (lon: number, lat: number): Promise<string | null> => {
  try {
    const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
      params: {
        format: 'jsonv2',
        lat,
        lon,
        zoom: 10,
        addressdetails: 1
      }
    });

    const data = response.data;
    return data.address && data.address.country ? data.address.country : null;
  } catch (error) {
    console.error('Error fetching country from coordinates:', error);
    return null;
  }
}

export const getCountrynameandIso = async (coordinates : number[]) : Promise<{countryName? : string, iso? : string, error? : any}> => {
  try {
    const countryName = await getCountryFromCoordinates(coordinates[0], coordinates[1])
    if(countryName){
      const getIso = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
      const iso = getIso.data[0].cca2
      return {countryName, iso}
    } else {
      return {error : 'Country name not available'}
    }
  } catch (error) {
    console.log(error)
    return {error}
  }
}
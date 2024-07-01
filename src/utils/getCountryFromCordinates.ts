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

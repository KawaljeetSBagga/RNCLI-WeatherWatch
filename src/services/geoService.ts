import axios from 'axios';
import {GeoLocationType} from '../types/type';

export const fetchGeoLocation = async (
  locationName: string,
): Promise<GeoLocationType[] | null> => {
  try {
    const geoCodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${locationName}`;
    const response = await axios.get(geoCodeUrl);

    if (response.data && response.data.results) {
      return response.data.results;
    }
    return null;
  } catch (error) {
    return null;
  }
};

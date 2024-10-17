import axios from 'axios';
import {WeatherData} from '../types/type';

export const fetchWeatherData = async (
  latitude: number,
  longitude: number,
): Promise<WeatherData | null> => {
  try {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&current_weather=true`;
    const weatherResponse = await axios.get<WeatherData>(weatherUrl);

    if (weatherResponse.data) {
      return weatherResponse.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

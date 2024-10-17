import axios from 'axios';
import {fetchWeatherData} from '../weatherService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchWeatherData', () => {
  it('should return weather data when the API call is successful', async () => {
    const mockResponse = {
      data: {
        current_weather: {
          temperature: 25,
          weathercode: '0',
        },
        daily: {
          time: ['2024-10-16', '2024-10-17'],
          temperature_2m_max: [20, 22],
          temperature_2m_min: [15, 16],
        },
      },
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const result = await fetchWeatherData(40.7128, -74.006);
    expect(result).toEqual(mockResponse.data);
  });

  it('should return null when the response does not contain data', async () => {
    const mockResponse = {};

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const result = await fetchWeatherData(40.7128, -74.006);
    expect(result).toBeNull();
  });

  it('should return null when there is an error during the API call', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    const result = await fetchWeatherData(40.7128, -74.006);
    expect(result).toBeNull();
  });
});

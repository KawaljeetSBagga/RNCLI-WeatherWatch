import axios from 'axios';
import {fetchGeoLocation} from '../geoService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchGeoLocation', () => {
  it('should return geo locations when results are present', async () => {
    const mockResponse = {
      data: {
        results: [
          {id: 1, name: 'New York', latitude: 40.7128, longitude: -74.006},
        ],
      },
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const result = await fetchGeoLocation('New York');
    expect(result).toEqual(mockResponse.data.results);
  });

  it('should return null when results are not present in the response', async () => {
    const mockResponse = {
      data: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const result = await fetchGeoLocation('Nonexistent Location');
    expect(result).toBeNull();
  });

  it('should return null when there is an error', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    const result = await fetchGeoLocation('New York');
    expect(result).toBeNull();
  });
});

import React from 'react';

import axios from 'axios';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

import {SearchLocation} from '../SearchLocation';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('SearchLocation', () => {
  it('should display search results and handle location selection', async () => {
    const setWeatherData = jest.fn();
    const setSelectedLocation = jest.fn();

    // Mocking the geolocation API call (for the search locations)
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        results: [
          {id: 1, name: 'New York', latitude: 40.7128, longitude: -74.006},
        ],
      },
    });

    // Mocking the weather API call (after selecting a location)
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        current_weather: {temperature: 25, weathercode: 0},
        daily: {
          time: ['2024-10-16', '2024-10-17'],
          temperature_2m_max: [20, 22],
          temperature_2m_min: [15, 16],
        },
      },
    });

    const {getByPlaceholderText, getByText} = render(
      <SearchLocation
        setWeatherData={setWeatherData}
        setSelectedLocation={setSelectedLocation}
      />,
    );

    // Typing in the TextInput
    const input = getByPlaceholderText('Search for a location');
    fireEvent.changeText(input, 'New York');

    // Wait for the location result to be displayed
    await waitFor(() => expect(getByText('New York')).toBeTruthy());

    // Simulate selecting the location
    fireEvent.press(getByText('New York'));

    // Assert that setSelectedLocation was called with the correct data
    await waitFor(() => {
      expect(setSelectedLocation).toHaveBeenCalledWith('New York');
    });

    // Assert that setWeatherData was called after the weather API call
    await waitFor(() => {
      expect(setWeatherData).toHaveBeenCalled();
    });
  });

  it('should clear locations if search text is empty', async () => {
    const setWeatherData = jest.fn();
    const setSelectedLocation = jest.fn();
    const setLocations = jest.fn(); // Mock for the setLocations function

    const {getByPlaceholderText} = render(
      <SearchLocation
        setWeatherData={setWeatherData}
        setSelectedLocation={setSelectedLocation}
        setLocations={setLocations} // Include this prop in your component if not already
      />,
    );

    const input = getByPlaceholderText('Search for a location');

    // Initially typing in a location
    fireEvent.changeText(input, 'New York');

    // Clear the input field
    fireEvent.changeText(input, '');

    // Assert that setLocations was called with an empty array
    await waitFor(() => {
      expect(setLocations).toHaveBeenCalledWith([]);
    });
  });

  it('should clear search results when clearSearch is called', () => {
    const setWeatherData = jest.fn();
    const setSelectedLocation = jest.fn();
    const setLocations = jest.fn(); // Mocking setLocations

    const {getByPlaceholderText, getByText} = render(
      <SearchLocation
        setWeatherData={setWeatherData}
        setSelectedLocation={setSelectedLocation}
        setLocations={setLocations} // Pass mock function
      />,
    );

    const input = getByPlaceholderText('Search for a location');

    // Type in the input
    fireEvent.changeText(input, 'New York');
    expect(input.props.value).toBe('New York');

    // Call clearSearch directly (you might need to adjust based on how you expose this function)
    fireEvent.press(getByText('x')); // Simulating clear button click

    // Assert that internal locations are cleared
    expect(setLocations).toHaveBeenCalledWith([]); // Check if setLocations was called with empty array
    expect(input.props.value).toBe(''); // Ensure input is cleared
  });
});

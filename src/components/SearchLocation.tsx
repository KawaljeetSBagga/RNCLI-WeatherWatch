import React, {FC, useState} from 'react';

import {ScrollView} from 'react-native-gesture-handler';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {styles} from '../styles/styles';
import {GeoLocationType, WeatherData} from '../types/type';

import {fetchGeoLocation} from '../services/geoService';
import {fetchWeatherData} from '../services/weatherService';

interface ISearchLocationProps {
  setWeatherData: (searchedWeatherData: WeatherData) => void;
  setSelectedLocation: (selectedLocationName: string) => void;
  setLocations?: (locations: GeoLocationType[]) => void; // Optional prop for testing
}

export const SearchLocation: FC<ISearchLocationProps> = ({
  setLocations,
  setWeatherData,
  setSelectedLocation,
}) => {
  const [location, setLocation] = useState<string>('');
  const [locations, setInternalLocations] = useState<GeoLocationType[]>([]);

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSearch = async (searchText: string) => {
    setLocation(searchText);

    if (searchText.trim() === '') {
      setInternalLocations([]); // Clear locations if the input is empty
      if (setLocations) {
        setLocations([]); // Call the passed setLocations function if it exists
      }
      return;
    }

    try {
      const geoLocations = await fetchGeoLocation(searchText);
      if (geoLocations) {
        setInternalLocations(geoLocations);
        if (setLocations) {
          setLocations(geoLocations); // Call the passed setLocations function if it exists
        }
      }
    } catch (error) {
      console.error('Error fetching searched locations:', error);
    }
  };

  const handleLocationSelect = async (
    lat: number,
    lng: number,
    name: string,
  ) => {
    hideKeyboard();
    setSelectedLocation(name);
    setLocation(name);
    setInternalLocations([]);

    // Fetch weather data using the selected location's latitude and longitude
    try {
      const weatherData = await fetchWeatherData(lat, lng);
      if (weatherData) {
        setWeatherData(weatherData);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const clearSearch = () => {
    setInternalLocations([]);
    setLocation('');
    if (setLocations) {
      setLocations([]); // Clear locations if a clear function is passed
    }
  };

  const handleInputSubmit = () => {
    if (locations.length === 1) {
      const {latitude, longitude, name} = locations[0];
      handleLocationSelect(latitude, longitude, name); // Directly call weather API if there's only one location
    }
  };

  const renderLocationItem = (item: GeoLocationType) => (
    <View key={item.id} style={styles.searchOptions}>
      <TouchableOpacity
        onPress={() =>
          handleLocationSelect(item.latitude, item.longitude, item.name)
        }
        style={styles.locationItem}>
        <Text style={styles.dayName}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <TextInput
        value={location}
        style={styles.input}
        onChangeText={handleSearch}
        placeholder="Search for a location"
        onSubmitEditing={handleInputSubmit}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={clearSearch}
        style={styles.crossContainer}>
        <Text style={styles.crossText}>x</Text>
      </TouchableOpacity>
      {locations && locations.length > 0 && (
        <View style={styles.optionContainer}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            {locations.map(item => renderLocationItem(item))}
          </ScrollView>
        </View>
      )}
    </>
  );
};

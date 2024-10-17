import React, {useEffect, useState} from 'react';

import {Text, View, ScrollView} from 'react-native';

import {styles} from '../styles/styles';
import {WeatherData} from '../types/type';

import {fetchGeoLocation} from '../services/geoService';
import {fetchWeatherData} from '../services/weatherService';

import {SearchLocation} from '../components/SearchLocation';
import {TodaysWeatherDetails} from '../components/TodaysWeatherDetails';
import {UpcomingWeatherDetails} from '../components/UpcomingWeatherDetails';

export const HomeScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(
    'New York',
  );

  const weatherDataHandler = (searchedWeatherData: WeatherData) => {
    setWeatherData(searchedWeatherData);
  };

  const selectedLocationHandler = (selectedLocationName: string) => {
    setSelectedLocation(selectedLocationName);
  };

  const fetchInitialWeather = async () => {
    try {
      const geoLocations = await fetchGeoLocation('New York');
      if (geoLocations && geoLocations.length > 0) {
        const {latitude, longitude} = geoLocations[0];
        const weatherResponse = await fetchWeatherData(latitude, longitude);
        setWeatherData(weatherResponse);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching initial weather:', error);
    }
  };

  useEffect(() => {
    fetchInitialWeather();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.currentDay}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchLocation
        setWeatherData={weatherDataHandler}
        setSelectedLocation={selectedLocationHandler}
      />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        {weatherData && (
          <View style={styles.weatherContainer}>
            <TodaysWeatherDetails
              selectedLocation={selectedLocation}
              weatherData={weatherData}
            />
            <UpcomingWeatherDetails weatherData={weatherData} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

import React, {FC} from 'react';

import {
  Text,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import getWeatherImage, {
  getCurrentDayName,
  getWeatherDescription,
} from '../helpers/getWeatherImage';
import {styles} from '../styles/styles';
import {WeatherData} from '../types/type';

interface IWeatherDetailsProps {
  weatherData: WeatherData;
  selectedLocation: string | null;
}

export const TodaysWeatherDetails: FC<IWeatherDetailsProps> = ({
  selectedLocation,
  weatherData,
}) => {
  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View>
        <Text style={styles.currentDay}>{selectedLocation}</Text>
        <Image
          source={{
            uri: getWeatherImage(weatherData.current_weather.weathercode),
          }}
          style={styles.weatherImage}
        />
        <Text style={styles.currentTemperature}>
          {Math.round(weatherData.current_weather.temperature)} °C
        </Text>
        <Text style={styles.weatherTitle}>{getCurrentDayName()}</Text>
        <Text style={styles.weatherDesc}>
          {getWeatherDescription(weatherData.current_weather.weathercode)}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

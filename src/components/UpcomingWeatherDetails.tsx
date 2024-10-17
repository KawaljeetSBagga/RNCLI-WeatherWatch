import React, {FC} from 'react';

import {Image, Text, View} from 'react-native';

import getWeatherImage, {
  calculateAverageTemperature,
  getDayName,
  getWeatherCodeByTemperature,
} from '../helpers/getWeatherImage';
import {styles} from '../styles/styles';
import {WeatherData} from '../types/type';

interface IUpcomingWeatherDetailsProps {
  weatherData: WeatherData;
}

export const UpcomingWeatherDetails: FC<IUpcomingWeatherDetailsProps> = ({
  weatherData,
}) => {
  return (
    <View>
      {weatherData.daily.time.map((item, index) => {
        // Skip the current day as we are already displaying it
        if (index === 0) {
          return null;
        }

        const averageTemp = calculateAverageTemperature(
          weatherData.daily.temperature_2m_max[index],
          weatherData.daily.temperature_2m_min[index],
        );

        // Get weather code based on average temperature
        const weatherCode = getWeatherCodeByTemperature(averageTemp);

        return (
          <View key={item} style={styles.dailyForecast}>
            <Text style={styles.dayName}>{getDayName(item)}</Text>
            <View style={styles.temperatureRow}>
              <Text style={styles.temperature}>{averageTemp} °C</Text>
              <Image
                source={{
                  uri: getWeatherImage(weatherCode), // Assuming day time
                }}
                style={styles.weatherImageThumbnail}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

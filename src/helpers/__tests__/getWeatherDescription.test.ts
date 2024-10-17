import {getWeatherDescription, WeatherCode} from '../getWeatherImage';

test.each([
  {weatherCode: '0', description: 'Sunny'},
  {weatherCode: '1', description: 'Mainly Sunny'},
  {weatherCode: '2', description: 'Partly Cloudy'},
  {weatherCode: '3', description: 'Cloudy'},
  {weatherCode: '45', description: 'Foggy'},
  {weatherCode: '48', description: 'Rime Fog'},
  {weatherCode: '51', description: 'Light Drizzle'},
  {weatherCode: '53', description: 'Drizzle'},
  {weatherCode: '55', description: 'Heavy Drizzle'},
  {weatherCode: '56', description: 'Light Freezing Drizzle'},
  {weatherCode: '57', description: 'Freezing Drizzle'},
  {weatherCode: '61', description: 'Light Rain'},
  {weatherCode: '63', description: 'Rain'},
  {weatherCode: '65', description: 'Heavy Rain'},
  {weatherCode: '66', description: 'Light Freezing Rain'},
  {weatherCode: '67', description: 'Freezing Rain'},
  {weatherCode: '71', description: 'Light Snow'},
  {weatherCode: '73', description: 'Snow'},
  {weatherCode: '75', description: 'Heavy Snow'},
  {weatherCode: '77', description: 'Snow Grains'},
  {weatherCode: '80', description: 'Light Showers'},
  {weatherCode: '81', description: 'Showers'},
  {weatherCode: '82', description: 'Heavy Showers'},
  {weatherCode: '85', description: 'Light Snow Showers'},
  {weatherCode: '86', description: 'Snow Showers'},
  {weatherCode: '95', description: 'Thunderstorm'},
  {weatherCode: '96', description: 'Light Thunderstorms With Hail'},
  {weatherCode: '99', description: 'Thunderstorm With Hail'},
])(
  'should render the correct description for weather code: $weatherCode',
  ({weatherCode, description}) => {
    expect(getWeatherDescription(weatherCode as WeatherCode)).toEqual(
      description,
    );
  },
);

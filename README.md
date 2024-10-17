# 🌩️ Weather Watch

Introducing *Weather Watch*, the app that delivers accurate weather forecasts, ensuring you’re always prepared for the day’s weather with a smile!

## Features

- **Location Search**: Users can search for locations using a search bar.
- **Weather Display**: Current weather conditions and forecasts are displayed based on the selected location, including weather for the next 6 days of the week.
- **Cross-Platform Compatibility**: The application runs smoothly on both Android and iOS platforms.

## Demo Videos

### Android Demo
Watch the application in action on Android:

https://github.com/user-attachments/assets/f6e4ab42-2056-4c3c-8ff8-bed605f8c5fe

### iOS Demo
See the application running on iOS:

https://github.com/user-attachments/assets/dbb27956-21ca-43ae-958f-a81360acee3c

## Test Cases

All the expected test cases have been written and executed successfully. Below is a screenshot of the test results demonstrating that the application is functioning as expected:

<img width="840" alt="Screenshot 2024-10-17 at 4 06 30 PM" src="https://github.com/user-attachments/assets/46cfc6e5-5526-4a6f-98d6-8f643f7e43a7">


**Note**: The requirement was to test one complex component - `SearchLocation` in my case, one helper function `getWeatherImage`, and one API. However, I was able to achieve tests for both APIs.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KawaljeetSBagga/RNCLI-WeatherWatch.git

2. Navigate into the project directory:
   ```bash
   cd yourproject

3. Install dependencies:
   ```bash
   npm install
   
4. For iOS
   ```bash
   cd ios && pod install
   npm run ios
   
5. For Android
   ```bash
   npm run android

## Technologies Used

 **React Native & Typescript**: For building the mobile application and supporting both Android and iOS platforms

 **Axios**: For making API calls to fetch weather data and location information

 **Jest & RNTL**: For writing and running test cases.


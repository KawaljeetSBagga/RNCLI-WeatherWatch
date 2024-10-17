import {Dimensions, Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87CEEB',
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 64 : 0,
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: Dimensions.get('window').width - 32,
    margin: 16,
    height: 42,
    backgroundColor: 'white',
  },
  locationItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  weatherContainer: {
    marginTop: 20,
  },
  weatherTitle: {
    fontSize: 14,
    color: '#2f2f2f',
    alignSelf: 'center',
  },
  weatherImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  weatherImageThumbnail: {
    width: 28,
    height: 28,
  },
  dailyForecast: {
    marginTop: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 32,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5, // For Android shadow
  },
  dayName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  currentDay: {
    fontSize: 22,
    alignSelf: 'center',
  },
  currentTemperature: {
    fontSize: 36,
    fontWeight: '100',
    alignSelf: 'center',
  },
  weatherDesc: {
    fontSize: 30,
    marginVertical: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  searchOptions: {
    backgroundColor: 'white',
  },
  optionContainer: {
    top: Platform.OS === 'ios' ? 118 : 54, // This height is calculated based on UI height (for iOS) - 64 is height from top + 42 is height of text input + 8 top margin
    zIndex: 1,
    alignSelf: 'center',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 32,
  },
  temperatureRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  temperature: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 8,
  },
  scrollView: {
    paddingBottom: 20,
  },
  crossText: {
    top: -2,
    fontSize: 16,
    color: 'white',
  },
  crossContainer: {
    top: Platform.OS === 'ios' ? 89 : 26, // This top is calculated based on UI height(for iOS) from top which is 64, then half TextInput height top/2 = 42/2 = 21 and finally padding/2 = 8/2 = 4 which is the half of top margin
    right: 24,
    width: 24,
    height: 24,
    padding: 2,
    borderRadius: 16,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

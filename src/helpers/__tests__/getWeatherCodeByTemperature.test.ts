import {getWeatherCodeByTemperature} from '../getWeatherImage';

describe('getWeatherCodeByTemperature', () => {
  it('should return "0" for temperatures 30 and above', () => {
    expect(getWeatherCodeByTemperature(30)).toBe('0');
    expect(getWeatherCodeByTemperature(35)).toBe('0');
  });

  it('should return "1" for temperatures from 25 to 29.9', () => {
    expect(getWeatherCodeByTemperature(25)).toBe('1');
    expect(getWeatherCodeByTemperature(29)).toBe('1');
  });

  it('should return "2" for temperatures from 20 to 24.9', () => {
    expect(getWeatherCodeByTemperature(20)).toBe('2');
    expect(getWeatherCodeByTemperature(24)).toBe('2');
  });

  it('should return "3" for temperatures from 15 to 19.9', () => {
    expect(getWeatherCodeByTemperature(15)).toBe('3');
    expect(getWeatherCodeByTemperature(19)).toBe('3');
  });

  it('should return "45" for temperatures from 10 to 14.9', () => {
    expect(getWeatherCodeByTemperature(10)).toBe('45');
    expect(getWeatherCodeByTemperature(14)).toBe('45');
  });

  it('should return "51" for temperatures from 5 to 9.9', () => {
    expect(getWeatherCodeByTemperature(5)).toBe('51');
    expect(getWeatherCodeByTemperature(9)).toBe('51');
  });

  it('should return "61" for temperatures from 0 to 4.9', () => {
    expect(getWeatherCodeByTemperature(0)).toBe('61');
    expect(getWeatherCodeByTemperature(4)).toBe('61');
  });

  it('should return "71" for temperatures below 0', () => {
    expect(getWeatherCodeByTemperature(-1)).toBe('71');
    expect(getWeatherCodeByTemperature(-10)).toBe('71');
  });
});

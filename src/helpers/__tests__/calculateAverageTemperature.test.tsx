import {calculateAverageTemperature} from '../getWeatherImage';

describe('calculateAverageTemperature', () => {
  it('should calculate the average of max and min temperature', () => {
    const maxTemp = 20;
    const minTemp = 10;

    const result = calculateAverageTemperature(maxTemp, minTemp);
    expect(result).toBe(15);
  });

  it('should round the result to the nearest integer', () => {
    const maxTemp = 21.7;
    const minTemp = 15.3;

    const result = calculateAverageTemperature(maxTemp, minTemp);
    expect(result).toBe(19); // Should round the result
  });
});

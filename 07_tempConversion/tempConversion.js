

const convertToCelsius = function (inputtedFahrenheitTemp) {
  celsiusTemp = (5 / 9) * (inputtedFahrenheitTemp - 32);
  return Math.round(celsiusTemp * 10) / 10;
};

const convertToFahrenheit = function (inputtedCelciusTemp) {
  fahrenheitTemp = (inputtedCelciusTemp * (9 / 5) + 32);
  return Math.round(fahrenheitTemp * 10) / 10;
};

convertToCelsius(50.25);
convertToFahrenheit(50);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
const convertToCelsius = function(num) {
  num= parseFloat([(num-32)*5]/9,1);
  return Math.round(num * 10) / 10
};

const convertToFahrenheit = function(num) {
  num= parseFloat((num *9/5)+32,1);
  return Math.round(num * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

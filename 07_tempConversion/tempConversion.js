const ftoc = function(fahrenheitTemp) { 
  //celsius = (fahrenheit - 32) * 5/9
  const celsiusTemp = (fahrenheitTemp - 32) * 5/9;

  return Number(celsiusTemp.toFixed(1));
};

const ctof = function(celsiusTemp) {
  //fahrenheit = celsius * 9/5 + 32
  const fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;

  return Number(fahrenheitTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

// utils/converter.js

export function convertLength(value, fromUnit, toUnit) {
    switch (fromUnit) {
      case "length-meter":
        switch (toUnit) {
          case "length-kilometer":
            return value / 1000;
          case "length-mile":
            return value / 1609.34;
          default:
            return value;
        }
      case "length-kilometer":
        switch (toUnit) {
          case "length-meter":
            return value * 1000;
          case "length-mile":
            return value / 1.60934;
          default:
            return value;
        }
      case "length-mile":
        switch (toUnit) {
          case "length-meter":
            return value * 1609.34;
          case "length-kilometer":
            return value * 1.60934;
          default:
            return value;
        }
      default:
        return value;
    }
  }
  
  export function convertWeight(value, fromUnit, toUnit) {
    switch (fromUnit) {
      case "weight-gram":
        switch (toUnit) {
          case "weight-kilogram":
            return value / 1000;
          case "weight-pound":
            return value * 0.00220462;
          default:
            return value;
        }
      case "weight-kilogram":
        switch (toUnit) {
          case "weight-gram":
            return value * 1000;
          case "weight-pound":
            return value * 2.20462;
          default:
            return value;
        }
      case "weight-pound":
        switch (toUnit) {
          case "weight-gram":
            return value * 453.592;
          case "weight-kilogram":
            return value / 2.20462;
          default:
            return value;
        }
      default:
        return value;
    }
  }
  
  export function convertTemperature(value, fromUnit, toUnit) {
    switch (fromUnit) {
      case "temperature-celsius":
        switch (toUnit) {
          case "temperature-fahrenheit":
            return (value * 9 / 5) + 32;
          case "temperature-kelvin":
            return value + 273.15;
          default:
            return value;
        }
      case "temperature-fahrenheit":
        switch (toUnit) {
          case "temperature-celsius":
            return (value - 32) * 5 / 9;
          case "temperature-kelvin":
            return (value - 32) * 5 / 9 + 273.15;
          default:
            return value;
        }
      case "temperature-kelvin":
        switch (toUnit) {
          case "temperature-celsius":
            return value - 273.15;
          case "temperature-fahrenheit":
            return (value - 273.15) * 9 / 5 + 32;
          default:
            return value;
        }
      default:
        return value;
    }
  }
  
  export function convertAngle(value, fromUnit, toUnit) {
    switch (fromUnit) {
      case "angle-radian":
        switch (toUnit) {
          case "angle-degree":
            return value * (180 / Math.PI);
          default:
            return value;
        }
      case "angle-degree":
        switch (toUnit) {
          case "angle-radian":
            return value * (Math.PI / 180);
          default:
            return value;
        }
      default:
        return value;
    }
  }
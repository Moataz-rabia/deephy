<template>
    <div id="app">
      <div class="container">
          <form @submit.prevent="convert">
        <h1>Unit Converter</h1>
        <label for="value">Value:</label>
        <input type="number" id="value" v-model="value" >
        <br>
        <label for="from-unit">From:</label>
        <select id="from-unit" v-model="fromUnit" >
          <option value="length-meter">Meter (m)</option>
          <option value="length-kilometer">Kilometer (km)</option>
          <option value="length-mile">Mile (mi)</option>
          <option value="weight-gram">Gram (g)</option>
          <option value="weight-kilogram">Kilogram (kg)</option>
          <option value="weight-pound">Pound (lb)</option>
          <option value="temperature-celsius">Celsius (°C)</option>
          <option value="temperature-fahrenheit">Fahrenheit (°F)</option>
          <option value="angle-radian">Radian (rad)</option>
          <option value="angle-degree">Degree (°)</option>
          <option value="temperature-kelvin">Kelvin (K)</option>
        </select>
        <br>
        <label for="to-unit">To:</label>
        <select id="to-unit" v-model="toUnit" >
          <option value="length-meter">Meter (m)</option>
          <option value="length-kilometer">Kilometer (km)</option>
          <option value="length-mile">Mile (mi)</option>
          <option value="weight-gram">Gram (g)</option>
          <option value="weight-kilogram">Kilogram (kg)</option>
          <option value="weight-pound">Pound (lb)</option>
          <option value="temperature-celsius">Celsius (°C)</option>
          <option value="temperature-fahrenheit">Fahrenheit (°F)</option>
          <option value="angle-radian">Radian (rad)</option>
          <option value="angle-degree">Degree (°)</option>
          <option value="temperature-kelvin">Kelvin (K)</option>
        </select>
        <br>
        <button type="submit">Convert</button>
        <p v-if="result">Result: {{ result }}</p>
    </form>
    
      </div>
      
      
    </div>
  </template>
<script>
export default {
  data() {
    return {
      value: '',
      fromUnit: '',
      toUnit: '',
      result: ''
    }
  },
  methods: {
    convert() {
      if (this.value && this.fromUnit && this.toUnit) {
        let result;

        switch (this.fromUnit) {
          case 'length-meter':
            switch (this.toUnit) {
              case 'length-kilometer':
                result = this.value / 1000;
                break;
              case 'length-mile':
                result = this.value / 1609.34;
                break;
              default:
                result = this.value;
            }
            break;
          case 'length-kilometer':
            switch (this.toUnit) {
              case 'length-meter':
                result = this.value * 1000;
                break;
              case 'length-mile':
                result = this.value / 1.60934;
                break;
              default:
                result = this.value;
            }
            break;
          case 'length-mile':
            switch (this.toUnit) {
              case 'length-meter':
                result = this.value * 1609.34;
                break;
              case 'length-kilometer':
                result = this.value * 1.60934;
                break;
              default:
                result = this.value;
            }
            break;
          case 'weight-gram':
            switch (this.toUnit) {
              case 'weight-kilogram':
                result = this.value / 1000;
                break;
              case 'weight-pound':
                result = this.value * 0.00220462;
                break;
              default:
                result = this.value;
            }
            break;
          case 'weight-kilogram':
            switch (this.toUnit) {
              case 'weight-gram':
                result = this.value * 1000;
                break;
              case 'weight-pound':
                result = this.value * 2.20462;
                break;
              default:
                result = this.value;
            }
            break;
          case 'weight-pound':
            switch (this.toUnit) {
              case 'weight-gram':
                result = this.value * 453.592;
                break;
              case 'weight-kilogram':
                result = this.value / 2.20462;
                break;
              default:
                result = this.value;
            }
            break;
          case 'temperature-celsius':
            switch (this.toUnit) {
              case 'temperature-fahrenheit':
                result = (this.value * 9/5) + 32;
                break;
              case 'temperature -kelvin':
                result = parseFloat(this.value) + 273.15;
                break;
              default:
                result = this.value;
            }
            break;
          case 'temperature-fahrenheit':
            switch (this.toUnit) {
              case 'temperature-celsius':
                result = (this.value - 32) * 5/9;
                break;
              case 'temperature-kelvin':
                result = (this.value - 32) * 5/9 + 273.15;
                break;
              default:
                result = this.value;
            }
            break;
          case 'temperature-kelvin':
            switch (this.toUnit) {
              case 'temperature-celsius':
                result = this.value - 273.15;
                break;
              case 'temperature-fahrenheit':
                result = (this.value - 273.15) * 9/5 + 32;
                break;
              default:
                result = this.value;
            }
            break;
            case 'angle-radian':
        switch (this.toUnit) {
          case 'angle-degree':
            result = this.value * 180 / Math.PI;
            break;
          default:
            result = this.value;
        }
        break;
      case 'angle-degree':
        switch (this.toUnit) {
          case 'angle-radian':
            result = this.value * Math.PI / 180;
            break;
          default:
            result = this.value;
        }
        break;
        }

        this.result = result;
      } else {
        this.result = "Please enter a value and select units.";
      }
    }
  }
}
</script>
<style scoped>
#app {
    height: 100%;
    width: 100%;
      margin: 0;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('C:\Users\utilisateur\Desktop\deephy\src\assets\b3.jpg') no-repeat center center fixed;
      padding: 0;
      font-family: Arial, sans-serif;
      background-size: cover;
      color: #ffffff;
    }

    .container {
  position: relative;
  height: 100vh;
  width: 100vw;
}

form {
  display: block;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(30px);
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="number"], select {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button[type="submit"] {
  width: 100%;
  height: 40px;
  background-color:#ff6f3f;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  text-transform: uppercase;
}

button[type="submit"]:hover {
  background-color: #ff3f1f;
  transition: .5s ease-in-out;
}

p {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
}
</style>
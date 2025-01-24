<template>
  <div class="home" :class="{ 'sidebar-open': isSidebarOpen }">
    <header>
      <div class="header-content">
        <h1 style="text-transform: uppercase;">Welcome to DeephySolver, Engineer!</h1>
        <div class="line"></div>
        <h2>We're here to make your engineering calculations quick and easy. Whether you're converting units, using our calculator, or exploring our formula library, we've got you covered. Dive in and discover how we can help streamline your work!</h2>
      </div>
    </header>

    <section>
      <div class="title">
        <h1>About Us</h1>
        <div class="line"></div>
      </div>
      <p>At DeephySolver, we're passionate about empowering engineers and professionals to work more efficiently and effectively. Our team is dedicated to providing innovative solutions that simplify complex calculations and make it easier to access the information you need. With a strong focus on user experience and accuracy, we strive to create tools that are both intuitive and reliable. Whether you're a seasoned engineer or just starting out, our goal is to help you streamline your workflow, reduce errors, and achieve your goals with confidence.</p>

      <div class="row">
        <div class="col">
          <img src="../assets/unit.png" alt="">
          <h1>Unit Converter</h1>
          <p>Easily convert between different units of measurement with our user-friendly unit converter tool. Whether you need to switch from kilometers to miles, kilograms to pounds, or Celsius to Fahrenheit, our tool has got you covered. Simply enter the value you want to convert, select the units, and get instant, accurate results.</p>
          <button><router-link to="">From Here</router-link></button>
        </div>
        <div class="col">
          <img src="../assets/formula.jpg" alt="">
          <h1>Formula Library</h1>
          <p>You'll find a comprehensive collection of mathematical, scientific, and engineering formulas. Whether you're a student, a professional, or just someone with a curious mind, our library is designed to help you find the formulas you need quickly and easily. Explore various categories, including algebra, calculus, physics, chemistry, and more. Each formula is presented with clear explanations and examples to help you understand and apply them effectively.</p>
          <button><router-link to="/tool">From Here</router-link></button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  props: {
    isSidebarOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

/* General Styles */

header {
  width: 100vw;
  height: 100vh;
  background-image: url(C:/Users/utilisateur/Documents/stage_work/vue_js/deephy/src/assets/b3.jpg);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment:fixed ;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: transform 0.3s ease;
}
.col a{
  text-decoration:none ;
}
.header-content {
  margin-bottom: 150px;
  color: whitesmoke;
  text-align: center;
}

.line {
  width: 150px;
  height: 4px;
  background-color: #FCA123;
  border-radius: 10px;
  margin: 10px auto;
}

.header-content h1 {
  font-size: 7vmin;
  margin-top: 50px;
  margin-bottom: 30px;
}

.header-content h2 {
  font-size: 3vmin;
  margin-bottom: 30px;
  margin-right: 30px;
  margin-left: 30px;
}

section {
  margin: 80px auto;
  width: 80%;
  transition: transform 0.3s ease;
}

.title {
  text-align: center;
  font-size: 4vmin;
  color: black;
  text-transform: uppercase;
}

.row {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.row .col {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin: 20px;
  font-size: 20px;
}

.row .col img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

p {
  pad: 0 40px;
  line-height: 1.5;
  font-size: 20px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

button {
  background: #ff6f3f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 160px;
  height: 50px;
  text-transform: uppercase;
  transition: background 0.3s, transform 0.3s;
}

button:hover {
  background: #ff3f1f;
  transform: scale(1.1);
}
button:active {
  transform: scale(0.9);
}

</style>

<template>
  <div :class="['sidebar', { open: isOpen }]">
   
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/calcul">calcule</router-link></li>
        <li><router-link to="/tool">Tools</router-link></li>
        <li><router-link to="/About">About</router-link></li>
        <li><router-link to="/contact">contact</router-link></li>

      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background: #333;
  color: white;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
}

.sidebar.open {
  transform: translateX(0);
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 60px 0;
  margin-top: 90px;
}

nav ul li {
  padding: 20px 20px;
}


nav ul li a {
  text-decoration: none !important;
  color: white;
  font-size: 18px;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #ff6f3f;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.close-btn:hover {
  color: #ff6f3f;
}
</style>

<template>
  <div class="app-wrapper">
    <!-- SideBar -->
    <SideBar :isOpen="isSideBarOpen" @toggle="toggleSideBar" />

    <!-- Main Content -->
    <div class="main-content" :class="{ 'sidebar-open': isSideBarOpen }">
      <!-- Menu Button -->
      <button class="menu-btn" @click="toggleSideBar">☰</button>

      <!-- Render Homepage -->
      <router-view :isSideBarOpen="isSideBarOpen" />
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';



export default {
  data() {
    return {
      isSideBarOpen: false,
    };
  },
  methods: {
    toggleSideBar() {
      this.isSideBarOpen = !this.isSideBarOpen;
    },
  },
  components: {
    SideBar,
  },
};
</script>

<style>
body {
  animation: fadeIn 2s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
/* Ensure button is positioned correctly on top of the homepage */
.menu-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  background: #333;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s;
}

.menu-btn:hover {
  background: #555;
}

.app-wrapper {
  display: flex;
}

.main-content {
  flex: 1;
  position: relative;
  overflow-x: hidden;
  transition: margin 0.3s;
}

.main-content.sidebar-open {
  margin-left: 250px; /* adjust this value to match the width of your sidebar */
  padding-left: 0; /* remove any padding to prevent white space */
}

/* Add this to make sure the sidebar is not overlapped by the main content */
.app-wrapper > * {
  transition: margin 0.3s;
}
</style>
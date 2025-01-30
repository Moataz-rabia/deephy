<template>
  <!--
Cette ligne de code utilise la liaison d'attributs de Vue.js pour définir dynamiquement les classes CSS de l'élément.
- 'sidebar' est une classe CSS statique qui sera toujours appliquée.
- { open: isOpen } est un objet où la classe 'open' sera appliquée uniquement si la propriété 'isOpen' est vraie.
-->
  <div :class="['sidebar', { open: isOpen }]">
    <!-- Liens de navigation vers différentes pages. Voir le fichier index.js dans le répertoire router pour les définitions des routes. -->
    <nav>
      <ul>
        <li><router-link to="/"><i class="fas fa-home"></i> Home</router-link></li>
        <li><router-link to="/calcul"><i class="fas fa-calculator"></i>  calcul</router-link></li>
        <li><router-link to="/tool"><i class="fas fa-tools"></i> Unit converter</router-link></li>
        <li><router-link to="/About"><i class="fas fa-info-circle"></i> About</router-link></li>
        <li><router-link to="/contact"><i class="fas fa-envelope"></i> contact</router-link></li>
        <li><router-link to="/libraryPage"><i class="fas fa-book"></i> formula library</router-link></li>
      </ul>
    </nav>
    <img src="../assets/logo2.png" alt="">
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
.sidebar img{
  position: absolute;
    bottom: 10px;
    width: 100px;
    border-radius: 50px;
    
    height: 100px;
}
nav ul {
  list-style: none;
  padding: 0;
  margin: 60px 0;
  margin-top: 90px;
}

nav ul li {
  padding: 20px 20px;
  text-transform: uppercase;
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

</style>

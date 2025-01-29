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
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/calcul">calcul</router-link></li>
        <li><router-link to="/tool">Unit converter</router-link></li>
        <li><router-link to="/About">About</router-link></li>
        <li><router-link to="/contact">contact</router-link></li>
        <li><router-link to="/libraryPage">formula library</router-link></li>

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

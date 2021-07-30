<template>
  <div id="app">
      <router-link to="/">Home</router-link> |
      <router-link to="/Episodes">Episodios</router-link> |
      <router-link to="/Character">Character</router-link> |
      <b-nav-item-dropdown text="Lang" right>
          <router-link to="/Character2">Character2</router-link>
        </b-nav-item-dropdown>

    <router-view/>
  </div>
</template>


<script>


</script>






<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div >
    
      <b-navbar type="dark" variant="dark">
        <div id="nav">
    <b-navbar-nav>
      <b-nav-item >
        <router-link to="/">Home</router-link>
      </b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Character" right>
        <b-dropdown-item >
          <router-link to="/Character">Character</router-link>
        </b-dropdown-item>
        <b-dropdown-item >
          <router-link to="/Character2">Character2</router-link>
        </b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Episodes" right>
        <b-dropdown-item>
          <router-link to="/Episodes">Episodios</router-link> 
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
    </div>
  </b-navbar>
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

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Insert">Insert</router-link> |
    <router-link to="/Vypis_udajov">Vypis udajov</router-link>
  </nav>

  <router-view/>

</template>

<script>

</script>


<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}


nav {

  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  top: 0;
  left: 0;
  width: 100%;
}
nav a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  float: left;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
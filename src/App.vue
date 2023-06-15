<template>
  <div id="app">
    <nav>
      <router-link to="/">home</router-link><span class="pipe">|</span>
      <router-link to="/portfolio">portfolio</router-link>
    </nav>
    <router-view class="body" />
    <footer-component class="footer"/>
  </div>
</template>
<script>
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "app",
  components: {
    FooterComponent,

  }

}

</script>

<style>
html {
  height: 100%;
  overflow: none;
}

body {
  background-color: white;
  color: #1E2019;
  overflow: hidden;
  margin: 0px;
  font-family: 'Roboto Mono', monospace;
  
}

#app {
  display: grid;
  margin: 0px;
  grid-template-columns: 1fr;
  grid-template-rows: 5% 90% 5%;
  grid-template-areas: 
  "nav"
  "body"
  "footer";
  height: 100vh;
  width: 100vw;
 
}

.body {
  grid-area: body;

}

.footer {
  grid-area: footer;
}


nav {
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  grid-area: nav;
  font-family: 'Roboto Mono', monospace;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: #1E2019;
  line-height: normal;
  padding: 7px; 
}

nav a.router-link-exact-active {
  text-shadow: rgb(255, 133, 249) 5px 5px 5px;

}

.pipe {
  margin-top: 7px; 
}

@media only screen and (max-width: 600px){
  #app {
    position: fixed;
  }
  nav {
    justify-content: center;
  }

}



</style>

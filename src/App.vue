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
  background-color: rgb(235, 255, 250);
}

body {
  
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
  grid-area: nav;
  font-family: 'Roboto Mono', monospace;
}

nav a {
  text-decoration: none;
  color: #1E2019;
  line-height: normal;
  padding: 7px; 
}

nav a:hover{
  text-decoration: underline;
}

nav a.router-link-exact-active {
  text-shadow: 3px 3px 6px rgba(102, 135, 255, 0.59);

}

.pipe {
  margin-top: 7px; 
}


@media screen and (max-width: 900px) {
        
  nav {
    justify-content: center;
  }


      }
  


@media only screen and (max-width: 700px){
  #app {
    position: fixed;
  }
  

}



</style>

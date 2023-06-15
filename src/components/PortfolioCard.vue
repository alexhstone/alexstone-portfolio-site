<template>
  <a :href="project.html_url" target="_blank" >
  <div class="card">
  <div class="tools">
    <div class="circle">
      <span class="red box"></span>
    </div>
    <div class="circle">
      <span class="yellow box"></span>
    </div>
    <div class="circle">
      <span class="green box"></span>
    </div>
    <p class="language">{{ project.language }}</p>
  </div>
  <div class="card-content">
    <h2>{{ project.name }}</h2>
    <p>{{ project.description }}</p>
  </div>
</div></a>
</template>

<script>
export default {
    name: 'portfolio-card',

    //a "project" is an object we get back from the github api
    //for our purposes, we need it to have the following properties:
    //language, name, description, html-url
    props: ["project"],
}
</script>

<style scoped>
.card {
 width: 200px;
 height: 400px;
 margin: 0 auto;
 background-color: #cbe7fb;
 border-radius: 8px;
 box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
 cursor: pointer;
 text-decoration: none;
 color: #1E2019;
}

.card:hover {
    box-shadow: -12px 12px 2px -1px rgba(0, 0, 255, .2);
}

.tools {
 display: flex;
 align-items: center;
 padding: 0px 9px;
}

.circle {
 padding: 0 4px;
}

.box {
 display: inline-block;
 align-items: center;
 width: 10px;
 height: 10px;
 padding: 1px;
 border-radius: 50%;
}

.card-content {
    padding: 1rem;
}

.language {
 
   text-align: right;
   width: 100%;
   padding: 0 3px;


}

.red {
 background-color: #ff605c;
}

.yellow {
 background-color: #ffbd44;
}

.green {
 background-color: #00ca4e;
}

</style>
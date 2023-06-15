<template>
  <footer>
    <div class="social-media">
        <a href="https://www.linkedin.com/in/alexhstone/" target="_blank">LinkedIn</a>
        <a href="https://github.com/alexhstone" target="_blank">GitHub</a>
        <a href="https://github.com/alexhstone/alexstone-portfolio-site" target="_blank">See The Code...</a>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    footer {
        font-family: 'Roboto Mono', monospace;
        width: 100%;
        height: 3rem;
        padding-left: 2rem;
        text-transform: lowercase;
    }

    .social-media {
        display: flex;
        justify-content: flex-start;
        gap: 3rem;
    }

    .social-media a {
      text-decoration: none;
      color: black;
      cursor: pointer;
    }

    @media only screen and (max-width: 600px){
      footer {
        margin: 0;
        font-family: 'Roboto Mono', monospace;
        width: 100%;
        height: 1rem;
        padding-left: 2rem;
        overflow: none;
    }

    .social-media {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .social-media a {
      text-decoration: none;
      color: black;
      cursor: pointer;


    }
  }

</style>
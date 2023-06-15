<template>
  <div class="container">
    <div class="heading">
        <h1>my projects</h1>
        <p>click a card to view @ github</p>
    </div>
    <portfolio-container class="portfolio" />
  </div>
</template>

<script>
import PortfolioContainer from '@/components/PortfolioContainer.vue'

export default {
  components: {
    PortfolioContainer

  }

}

</script>
<style scoped>
.heading {
  text-align: center;
  margin-bottom: 0px;
  padding-bottom: 0px;
}
.heading p {
  margin-bottom: 0;
}
.portfolio {
  padding-top: 1rem;
}

@media only screen and (max-width: 600px){
 

}

</style>

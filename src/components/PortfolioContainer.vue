<template>
  <div class="container">
    <portfolio-card class="card" v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<script>
import PortfolioCard from './PortfolioCard.vue'
import GithubService from '@/services/GithubService';

export default {
  components: { PortfolioCard },


  data(){
    return {
        projects: [],
    }
  }, 

  created(){
    GithubService.getProjects()
    .then(response => {

            this.projects = response.data;
        }
    )
    .catch( error => {this.projects[0] = 
            {name: 'Uh Oh!', description: 'Something went wrong!', html_url: '#', language: ""} 
                console.log(error)});
  }

}
</script>

<style scoped>
    .container {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    height: 100%;
    overflow: auto;
    }

    @media only screen and (max-width: 700px){
        .container {
            scroll-snap-type: y mandatory;
            height: 70%;
            gap: 2rem;
            justify-content: center;
        }

        .card {
            scroll-snap-align: center;
            margin: 5rem;
        }

    }

    
</style>
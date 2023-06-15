<template>
  <div class="container">
    <portfolio-card class="card" v-for="project in projects" :key="project.id" :project="project" />
    <p v-if="projects.length < 1">Uh oh!  There's nothing here :(</p>
  </div>
</template>

<script>
import PortfolioCard from './PortfolioCard.vue'
import GithubService from '@/services/GithubService';

export default {
  components: { PortfolioCard },


  data(){
    return {

        //we will loop through this array and create portfolio cards for each object we get back
        //each object will be passed as a prop to the portfolio card
        projects: [],
    }
  }, 

  created(){
    //call the github api and ask for a list of "projects" to assign to our projects array in data
    GithubService.getProjects()
    .then(response => {
          
            this.projects = response.data;
        }
    )
    //right now, we have a p tag that will render and tell the user something went wrong
    .catch( error => {console.log(error)});
  }

}
</script>

<style scoped>
 
      .container {
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            gap: 3rem;
            height: 100%;
            width: 90%;
            overflow: auto;
            scroll-snap-type: y mandatory;
            height: 70%;
            gap: 2rem;
            justify-content: center;
  
        }

        .card {
            scroll-snap-align: center;
            margin: 3rem;
            
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
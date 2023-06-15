<template>
    <div class="container">

            <image-card class="image" />
            <blurb-component class="blurb" />

    </div>
</template>

<script>
import BlurbComponent from './BlurbComponent.vue'
import ImageCard from "./ImageCard.vue"

export default {
  name: "home-page",
  components: { ImageCard, BlurbComponent },

}
</script>

<style scoped>
    .container {
        margin: auto;
        display: flex;
        padding: 3rem 7rem;
        overflow: auto;
        height: 85%;
       
      
    }

    .blurb {
        width: 40%;
    }

    @media only screen and (max-width: 700px){
        .container {
            scroll-snap-type: y mandatory;
            overflow-x: hidden;
            padding: 1rem 1rem;
            display: grid; 
            grid-template-rows: 1fr 1fr;
            row-gap: 30rem;
            grid-template-areas:
            "blurb"
            "img";
        }

        .blurb {
            scroll-snap-align: start;
            height: 100%;
            margin: auto;
            padding-top: 10rem;
            width: 100%;
            grid-area: blurb;
        }

        .blurb p{
            word-wrap: break-word;
        }

        .image {
            scroll-snap-align: start;
            height: 100%;
            grid-area: img;
        }

    }


</style>
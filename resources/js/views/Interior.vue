<template>
  <div>
      <v-row class="hero parallax">
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="b1 pa-10">
          <h1 class="large_text my-6">
              Interior Design in Australlia
          </h1>
           <v-btn class="mb-6" dark color="primary" to="/contact">Contact Us</v-btn>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="bx-1 ma-0">
            <h3 class="my-6">We work alongside one of Londons finest interior designers. <br/>

With 20 years’ experience in delivering designs that are full of clever ideas. We’ll start with a Project Consultation of your style, needs and budget. We’ll suggest innovative design solutions and arrive at a concept that’s full of personality and perfectly fits your needs. <br/>

Whether it’s a budget bathroom or a commercial refurbishment, our designers are bubbling with ideas. We make sure our home owners, property developers and commercial clients get straight-talking practical advice and clever interior solutions. No fluff. Just sensible stuff which balances the latest from the design world with our tried-and-tested know-how. </h3>
            
        </v-col>
      </v-row>

      <div class="devider--1">
        <div class="devider blue"></div>
        <div class="devider green"></div>
        <div class="devider yellow"></div>
        <div class="devider red"></div>
      </div>

      <div class="parallax detail2">
        <div class="bx-1">
            <h2 class="my-6">Space Planning</h2>
            <p>The backbone of good interior design is making the space work. We aim to allocate every inch of sacred space in your home so it operates efficiently and adds value, so that when you walk around you feel “this just works”.</p>
        </div>
        <div class="bx--light">
            <h2 class="my-6">First Class Interior Design</h2>
            <p>From a single room revamp to entire properties, our expert team have the ideas and experience to create the perfect layout for the way you want to live. Enquire with us today and see what we can do for you.</p>
            <p class="my-6">You can also come to us for property maintenance. </p>
        </div>
        <div class="bx-1">
            <h2 class="my-6">Furniture and Lighting Design</h2>
            <p>Every scheme, and every space is different so that bespoke furniture allows a balanced design to be achieved in the most effective way. Unique furniture and lighting gives our designers particularly considered high end feel.</p>
        </div>
      </div>

      <Gallery :images="images" />

      <Testimonial />


  </div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

import Gallery from '../components/global/Gallery'

import Testimonial from '../components/global/Testimonial';

export default {
  components: {
    Loading,
    Gallery,
    Testimonial
  },

   metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Interior Design' ,
        titleTemplate: '%s | A TOUCH OF COLOUR'
        },

  data: () => {
      return {
          images: [
            {
                src: window.location.origin + '/storage/images/interior painting (1).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/interior painting (2).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/interior painting (3).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/interior painting (4).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/interior painting (5).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/interior painting (6).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/interior painting (7).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/interior painting (8).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/interior painting (9).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/interior painting (10).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/interior painting (11).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/interior painting (12).jpg',
                description: '',
            },
        ],
      }
  }

}
</script>

<style lang="scss">
.parallax {
  position: relative;
  opacity: 0.7;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  background-attachment: fixed;
}

.hero {
  min-height: 100vh;
  background-image: url('http://localhost:8000/storage/images/home8.jpg');

  
  align-items: center;

  text-align: center;
  padding: 50px;
}

.detail2 {
  min-height: 80vh;
  background-image: url('http://localhost:8000/storage/images/home7.jpeg');

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  //justify-content: space-around;
  //align-content: space-around;
  gap: 50px;
  //justify-items: center;
  align-items: stretch;

  text-align: center;
  padding: 50px;
}

.bx-1 {
    background-image: linear-gradient(to right, rgba(0,0,0, .6),  rgba(0,0,0, .6));
    border-radius: 25px;
    color: white;
    padding: 15px;

}

.bx--light {
    background-image: linear-gradient(to right, rgba(255,255,255, .6),  rgba(255,255,255, .6));
    border-radius: 25px;
    padding: 15px;
}

.large_text {
    font-size: 3rem;
    color: #000;
}

.devider {
    height: 5px;
  width: 100vw;
  background-color: blue;
  margin: 15px 0px;
}

.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
.yellow {
  background-color: yellow;
}
.red {
  background-color: red;
}

.list {
    text-align: start;
}
</style>
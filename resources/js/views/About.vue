<template>
  <div>
      <div class="hero5 parallax">
        <h1>Who we Are</h1>
        <h3 class="hero_body">
            We are an established family business with over 30 years of experience. We provide advice and friendly service with pride and are both reliable and honest. <br><br>
            Whether it is a full home refurbishment, an office regeneration, a commercial building rejuvenation or a lick of paint in the downstairs loo, A Touch of Colour will provide a team to accommodate your requests. With an extensive workforce covering Mellborn, our teams pride themselves on delivering a highly professional service with a truly personal touch. 
        </h3>
        <v-btn dark color="primary" to="/contact">Contact Us</v-btn>
      </div>

      <div class="devider--1">
        <div class="devider blue"></div>
        <div class="devider green"></div>
        <div class="devider yellow"></div>
        <div class="devider red"></div>
      </div>


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

  data: () => {
      return {
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

.hero5 {
  min-height: 100vh;
  background-image: url('http://localhost:8000/storage/images/home9.jpeg');

  display: grid;
  align-items: center;
  justify-items: center;

  text-align: center;
  padding: 50px;

  .hero_body {
      max-width: 80vw;
  }
}

.detail3 {
  min-height: 80vh;
  background-image: url(https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg);

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

.bx-01 {
    background-image: linear-gradient(to right, rgba(0,0,0, .6),  rgba(0,0,0, .6));
    border-radius: 25px;
    color: white;
    padding: 15px;

}

.bx--0light {
    background-image: linear-gradient(to right, rgba(255,255,255, .6),  rgba(255,255,255, .6));
    border-radius: 25px;
    padding: 15px;
}

.large_text {
    font-size: 55px;
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
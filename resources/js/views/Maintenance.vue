<template>
  <div>
      <v-row class="hero2 parallax">
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="b1 pa-10">
          <h1 class="large_text my-6">
              Professional home maintenance services Melborn, Australlia
          </h1>
           
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="bx-01 ma-0">
            <h2 class="my-6">
                When it comes to home maintenance services in Australlia, make A Touch of Colour your first choice. 
            </h2>
            <v-btn class="mb-6" dark color="primary" to="/contact">Contact Us</v-btn>
        </v-col>
      </v-row>

      <div class="devider--1">
        <div class="devider blue"></div>
        <div class="devider green"></div>
        <div class="devider yellow"></div>
        <div class="devider red"></div>
      </div>

      <div class="parallax detail3">
        <div class="bx-01">
            <h2 class="my-6">For all your property refurbishment requirements </h2>
            <p>If you are looking for a business that provides quality property maintenance services at great prices, then A Touch of Colour is the right choice for you. With over 20 years experience in the business behind us, we specialise in offering maintenance services for all kinds of domestic and commercial properties. From flooring and tiling to plumbing and carpentry, you can come to us for a range of home improvement services. </p>
        </div>
        <div class="bx--0light">
            <h2 class="my-6">Our property maintenance services include:</h2>
            <h3>
                Home improvements <br>
                Fencing <br>
                Patio cleaning <br>
                Brick pointing <br>
                Gutter clearance
            </h3>
        </div>
        <div class="bx-01">
            <h2 class="my-6">Home improvement specialists you can rely on </h2>
            <p>What's more, you can also choose us for interior and exterior decorating, commercial, corporate or residential and bathroom/kitchen tiling and other services. Our swift response and customer focused approach have enabled us to build a strong client base. For more information or for a free quote, talk to our friendly team today. </p>
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
        title: 'Property Maintenance' ,
        titleTemplate: '%s | A TOUCH OF COLOUR'
        },

  data: () => {
      return {
          images: [
            {
                src: window.location.origin + '/storage/images/exterior painting (22).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/exterior painting (26).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/exterior painting (30).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/exterior painting (12).jpg',
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

.hero2 {
  min-height: 100vh;
  background-image: url('http://localhost:8000/storage/images/property.webp');

  
  align-items: center;

  text-align: center;
  padding: 50px;
}

.detail3 {
  min-height: 80vh;
  background-image: url('http://localhost:8000/storage/images/property2.jpeg');

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
    font-size: 3rem;
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
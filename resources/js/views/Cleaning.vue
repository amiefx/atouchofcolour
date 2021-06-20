<template>
  <div>
      <v-row class="hero2 parallax">
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="b1 pa-10">
          <h1 class="large_text my-6">
              Professional Cleaning Services in Melborn, Australlia
          </h1>
           
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="bx-01 ma-0">
            <h2 class="my-6">
                When it comes to home cleaning services in Australlia, make A Touch of Colour your first choice. 
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
            <h2 class="my-6">Domestic Cleaning </h2>
            <p>With A Touch of Colour cleaning services you are able to go about your day fully in the knowledge that your home is being cleaned thoroughly and professionally by one of our fully trained cleaners, who will put that shine back in to your home.
We have a very keen eye for detail. We give every home the special attention and care it deserves making A Touch of Colour cleaning services a cleaning company you can rely on.</p>
        </div>
        <div class="bx--0light">
            <h2 class="my-6">Commercial Cleaning</h2>
            <h3>
                We have a extensive range of commercial customers including: sports halls, hotels, nurseries, schools, offices even churches.
We look after customers and businesses of all sizes, we can provide the right cleaner to suit your needs. Cleaning to the highest standards or cleaning to suit a budget we can accommodate, please contact us today to see what we can offer you.

            </h3>
        </div>
        <div class="bx-01">
            <h2 class="my-6">End of Tenancy Cleaning</h2>
            <p>Our rates for End of Tenancy cleaning are highly competitive, Work can be undertaken at short notice especially when tenants are moving in or out of the properties. All equipment is provided. Call us today to see what we can offer you.</p>
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
        title: 'Cleaning Services' ,
        titleTemplate: '%s | A TOUCH OF COLOUR'
        },

  data: () => {
      return {
          images: [
            {
                src: window.location.origin + '/storage/images/Floor (2).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/repairing (1).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/repairing (3).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/repairing (2).jpg',
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
  background-image: url('http://localhost:8000/storage/images/home6.jpeg');

  
  align-items: center;

  text-align: center;
  padding: 50px;
}

.detail3 {
  min-height: 80vh;
  background-image: url('http://localhost:8000/storage/images/Interior 1.jpg');

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
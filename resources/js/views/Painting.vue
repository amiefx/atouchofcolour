<template>
  <div>
      <v-row class="hero4 parallax">
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="b1 pa-10">
          <h1 class="large_text" >
              Experienced Commercial and Residential Painters
          </h1>

        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="b2">
            <h2 class="my-6">Add style and value to your home or office space with the exceptional painting and decorating services from A Touch of Colour. Call or email for a free, no obligation estimate. </h2>
            <v-btn class="mb-6" dark color="primary" to="/contact">Contact Us</v-btn>
        </v-col>
      </v-row>

      <div class="devider--1">
        <div class="devider blue"></div>
        <div class="devider green"></div>
        <div class="devider yellow"></div>
        <div class="devider red"></div>
      </div>

      <div class="parallax detail4">
        <div class="b4x-1">
            <h2 class="my-6">Dedicated painters and decorators</h2>
            <p>Do you want to give your home a complete makeover? At A Touch of Colour, we offer painting and decorating services at extremely affordable prices. Our team of dedicated painters and decorators will work with you right from the beginning, to make sure your property looks fresh and fabulous. For your peace of mind, we also provide a 12-month guarantee on all our services. Give us a call to discuss your requirements.</p>
        </div>
        <div class="b4x-light">
            <div class="mx-5 bx--light">
                <h2 class="my-6">A range of painting services offered:</h2>
            <ul class="list">
                <li>Commercial and Residential</li>
                <li>Projects</li>
                <li>Exterior and Interior</li>
                <li>Dustless Sanding Technology</li>
                <li>Special Offers Available</li>
                <li>Painting of Bespoke Furniture</li>
            </ul>
            <p class="my-6">You can also come to us for property maintenance. </p>
            </div>
        </div>
        <div class="b4x-1">
            <h2 class="my-6">Customer satisfaction is paramount</h2>
            <p>At A Touch of Colour, customer satisfaction is paramount. Regardless of the size of the job, equal consideration will be given to all our customers. From the smallest chest of drawers, through bespoke furniture, kitchens, bedrooms, to whole house redecoration and corporate and commercial projects; you can rely on us to get the job done promptly and to the highest standard. For your convenience, we are available 7 days a week.</p>
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
        title: 'Painting and Dedoration' ,
        titleTemplate: '%s | A TOUCH OF COLOUR'
        },

  data: () => {
      return {
          images: [
            {
                src: window.location.origin + '/storage/images/church_ (3).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/home2.jpeg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/home3.jpeg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/home8.jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/exterior painting (7).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/exterior painting (8).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/exterior painting (10).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/exterior painting (23).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/exterior painting (24).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/exterior painting (32).jpg',
                description: '',
            },
            {
                src: window.location.origin + '/storage/images/exterior painting (31).jpg',
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

.hero4 {
  min-height: 100vh;
  background-image: url('http://localhost:8000/storage/images/home3.jpeg');

  //display: grid;
 // grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  //justify-content: space-around;
  //align-content: space-around;
 // gap: 50px;
  //justify-items: center;
  align-items: center;

  text-align: center;
  padding: 50px;

  .b2 {
     background-image: linear-gradient(to right, rgba(0,0,0, .6),  rgba(0,0,0, .6));
    border-radius: 25px;
    color: white;
    padding: 15px;
  }

}

.detail4 {
  min-height: 80vh;
  background-image: url('http://localhost:8000/storage/images/home2.jpeg');

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

.b4x-1 {
    background-image: linear-gradient(to right, rgba(0,0,0, .6),  rgba(0,0,0, .6));
    border-radius: 25px;
    color: white;
    padding: 15px;

}

.b4x-light {
    background-image: linear-gradient(to right, rgba(255,255,255, .6),  rgba(255,255,255, .6));
    border-radius: 25px;
    padding: 15px;
}

.large_text {
    color: #005DFF;
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
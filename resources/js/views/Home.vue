<template>
  <div>
    <div class="welcome">
      <div class="box--1">
        <h1>
          Welcome to <br />
          A Touch of Colour
        </h1>
        <div class="color">
          <span class="_green">Colour</span>
          <span class="_yellow">Your</span>
          <span class="_red">World</span>
        </div>
      </div>
      <div class="box--2">
        <div class="intro pa-5">
          <p>
            We prepare walls and surfaces prior to painting by washing them down
            with pressure wash, filling holes and cracks, scraping and removing
            old paint. We mix, match and apply paints and decorative finished to
            paint jobs such as stencilling, lettering and glazing.
          </p>
          <p>
            We review every job to ensure nothing has been missed and that the
            customers are pleased with the service.
          </p>
          <p>
            Enjoy new colour, new adventures and memories with
            <strong>A Touch of Colour</strong> and qualified painters with over
            30 years of experience.
          </p>
          <v-btn
            rounded
            color="primary"
            dark
            @click="$vuetify.goTo('#testimonials', options)"
          >
            Testimonials
          </v-btn>
        </div>
        <div class="contact pa-5">
          <h3 class="mb-2">We want to hear from you</h3>
          <p>
            Send us your details and we’ll get back to you to schedule a time to
            talk.
          </p>
          <v-form v-model="valid" method="post" @submit.prevent="submit">
            <v-text-field
              label="Name"
              hide-details="auto"
              v-model="form.name"
            ></v-text-field>
            <v-text-field
              label="Emal"
              hide-details="auto"
              v-model="form.email"
            ></v-text-field>
            <v-text-field
              label="Phone"
              hide-details="auto"
              v-model="form.phone"
              class="mb-5"
            ></v-text-field>
            <v-alert dark color="primary" dense v-if="msg">
              {{ text }}
            </v-alert>
            <v-btn
              rounded
              :loading="loading"
              color="primary"
              :disabled="!valid"
              type="submit"
              >Send</v-btn
            >
          </v-form>
        </div>
      </div>
    </div>

    <div class="devider--1">
      <div class="devider blue"></div>
      <div class="devider green"></div>
      <div class="devider yellow"></div>
      <div class="devider red"></div>
    </div>

    <div class="services">
      <div class="service--1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          id="1209830789"
          class="svg u_1209830789"
          data-icon-name="li_paint_roller"
        >
          <path
            d="M86.2,43.4L56.6,13.8c-2.4-2.4-6.7-2.4-9.1,0L36.4,24.9c-2.5,2.5-2.5,6.6,0,9.1L66,63.6c1.2,1.2,2.8,1.9,4.6,1.9
	c1.7,0,3.3-0.7,4.6-1.9l4.6-4.6c3.8,4.6,3.5,11.5-0.8,15.8c-4.6,4.6-12.1,4.6-16.7,0l-9.2-9.2c-2.7-2.7-6.3-4.2-10.1-4.2
	c-3.4,0-6.6,1.2-9.2,3.4l-4.7-4.7L14.2,74.8c-3,3-3,7.9,0,11c1.5,1.5,3.4,2.3,5.5,2.3c2.1,0,4-0.8,5.5-2.3L39.9,71l-4.5-4.5
	c2.1-1.7,4.7-2.7,7.4-2.7c3.2,0,6.1,1.2,8.4,3.5l9.2,9.2c2.8,2.8,6.4,4.2,10.1,4.2c3.7,0,7.3-1.4,10.1-4.2
	c5.3-5.3,5.5-13.7,0.8-19.3l4.8-4.8C88.7,50,88.7,45.9,86.2,43.4z M23.4,84c-2,2-5.5,2-7.5,0c-2.1-2.1-2.1-5.4,0-7.5l13-13l7.5,7.5
	L23.4,84z M84.4,50.8L73.4,61.8c-1.5,1.5-4.2,1.5-5.7,0L38.1,32.3c-1.6-1.6-1.6-4.1,0-5.7l11.1-11.1c0.7-0.7,1.8-1.2,2.8-1.2
	c1.1,0,2.1,0.4,2.8,1.2l29.6,29.6C86,46.7,86,49.2,84.4,50.8z"
            id="1321686744"
          ></path>
        </svg>

        <h3>Our Services</h3>
        <ul class="list">
          <li>Painting and Decorating</li>
          <li>Interior Design</li>
          <li>Property Maintenance</li>
          <li>Commercial and Residential</li>
          <li>Professional Cleaning</li>
        </ul>
      </div>
      <div class="service--2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 70 70"
          id="1822776629"
          class="svg u_1822776629"
          data-icon-name="wp-question_mark_thin"
        >
          <g id="1149379259">
            <circle cx="35" cy="47" r="2" id="1373409117"></circle>
            <path
              d="M35,42c-0.6,0-1-0.4-1-1c0-3.2,2.2-4.8,4.2-6.3c2-1.5,3.8-2.8,3.8-5.5c0-3.6-2.9-6.2-7-6.2c-4.1,0-7,2.9-7,7
		c0,0.6-0.4,1-1,1c-0.6,0-1-0.4-1-1c0-5.2,3.8-9,9-9c5.2,0,9,3.4,9,8.2c0,3.7-2.4,5.5-4.6,7.1C37.6,37.7,36,38.8,36,41
		C36,41.6,35.6,42,35,42z"
              id="1158749410"
            ></path>
            <path
              d="M35,60c-13.8,0-25-11.2-25-25s11.2-25,25-25c13.8,0,25,11.2,25,25S48.8,60,35,60z M35,12c-12.7,0-23,10.3-23,23
		s10.3,23,23,23c12.7,0,23-10.3,23-23S47.7,12,35,12z"
              id="1940391037"
            ></path>
          </g>
        </svg>
        <h3>Why Choose Us?</h3>
        <ul class="list">
          <li>Over 30 Years of experience</li>
          <li>High Standards of Workmanship</li>
          <li>Customer care is our focus point</li>
          <li>1 year guarantee on all services</li>
        </ul>
      </div>
      <div class="service--3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          id="1391966636"
          class="svg u_1391966636"
          data-icon-name="li_tools"
        >
          <path
            d="M84.9,63.5c-2.3-2.3-5.3-3.6-8.6-3.6c-2.9,0-5.6,1-7.7,2.9L55.8,50l21.3-21.3l0.8,0.8l7.8-7.8l-3.1-3.1l-7.8,7.8l0.8,0.8
	L54.2,48.4L41.4,35.6c1.8-2.2,2.9-4.9,2.9-7.7c0-3.2-1.3-6.3-3.6-8.6c-3-3-7.5-4.2-11.7-3.1l-1.9,0.5l7.3,7.3l-6.3,6.3l-7.3-7.3
	l-0.5,1.9c-1.1,4.2,0.1,8.7,3.1,11.7c2.3,2.3,5.3,3.6,8.6,3.6l0,0c2.9,0,5.6-1,7.7-2.9L52.6,50L38.3,64.3l-3.9-3.9L21.9,72.9
	c-1.3,1.3-1.9,2.9-1.9,4.7c0,1.8,0.7,3.4,1.9,4.7c1.3,1.3,2.9,1.9,4.7,1.9c1.8,0,3.4-0.7,4.7-1.9l12.5-12.5l-3.9-3.9l14.3-14.3
	L67,64.4c-1.8,2.2-2.9,4.9-2.9,7.7c0,3.2,1.3,6.3,3.6,8.6c2.3,2.3,5.3,3.5,8.5,3.5c1.1,0,2.1-0.1,3.2-0.4l1.9-0.5L74,76l6.2-6.3
	l7.3,7.3l0.5-1.9C89.1,71,87.9,66.5,84.9,63.5z M32.1,37.8L32.1,37.8c-2.7,0-5.2-1-7-2.9c-2-2-3-4.7-2.9-7.6l6,6l9.4-9.4l-6-6
	c2.8-0.2,5.6,0.9,7.5,2.9c1.9,1.9,2.9,4.4,2.9,7c0,2.7-1,5.2-2.9,7C37.2,36.8,34.7,37.8,32.1,37.8z M29.7,80.7
	c-1.7,1.7-4.6,1.7-6.2,0c-0.8-0.8-1.3-1.9-1.3-3.1c0-1.2,0.5-2.3,1.3-3.1l10.9-10.9l6.3,6.3L29.7,80.7z M80.2,66.6L70.8,76l6,6
	c-0.2,0-0.4,0-0.6,0c-2.6,0-5.1-1-7-2.9c-1.9-1.9-2.9-4.4-2.9-7c0-2.7,1-5.2,2.9-7c1.9-1.9,4.4-2.9,7-2.9c2.7,0,5.2,1,7,2.9
	c2,2,3,4.7,2.9,7.6L80.2,66.6z"
            id="1495565370"
          ></path>
        </svg>
        <h3>Home Maintenance &amp; More</h3>
        <p>
          Whether you need home maintenance or our decorating services, we
          provide a competitive service. Get in touch with our team for more
          information
        </p>
      </div>
    </div>

    <Gallery2 :images2="images2" />

    <div class="services2">

      <div>
        <h1>Our services</h1>
      </div>

      <div class="serviceiner">
      <div class="service--1">
        <ul class="list">
          <li>New Homes</li>
          <li>Wall Paper</li>
          <li>Exterior and Interior Painting</li>
          <li>Extension</li>
          <li>Apartment &amp; Blocks</li>
        </ul>
      </div>
      <div class="service--2">
        <ul class="list">
          <li>Factories</li>
          <li>Churches</li>
          <li>Pressure Washing</li>
          <li>Building Repair</li>
        </ul>
      </div>
      <div class="service--3">
        <ul class="list">
          <li>Home Maintenance Service</li>
          <li>Floor System</li>
          <li>Spraying</li>
          <li>Short and Long Term Maintenance services</li>
        </ul>
      </div>
      </div>
    </div>

    <div class="devider--1">
      <div class="devider blue"></div>
      <div class="devider green"></div>
      <div class="devider yellow"></div>
      <div class="devider red"></div>
    </div>

    <Gallery :images="images" />

    <div id="testimonials">
      <Testimonial />
    </div>

    <div class="devider--1">
      <div class="devider blue"></div>
      <div class="devider green"></div>
      <div class="devider yellow"></div>
      <div class="devider red"></div>
    </div>

    <Ratings />

    <div class="vld-parent">
      <loading
        :active.sync="isLoading"
        loader="dots"
        :opacity="opacity"
        color="#6200E"
      ></loading>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

import Gallery from "../components/global/Gallery";
import Gallery2 from "../components/global/Gallery2";
import Testimonial from "../components/global/Testimonial";
import Ratings from "../components/global/Ratings";
import Services from "../components/global/Services";

export default {
  components: {
    Loading,
    Gallery,
    Gallery2,
    Testimonial,
    Ratings,
    Services,
  },

  data: () => {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      text: "",
      msg: false,
      valid: true,
      loading: false,

      products: [],
      isLoading: false,
      fullPage: false,
      opacity: 0.99,
      isActive: false,
      pagination: {},
      page: 1,
      basePath: window.location.origin,
      welcomeImg: window.location.origin + "/storage/images/Exterior 1.jpg",

      images: [
        {
          src: window.location.origin + "/storage/images/church_ (3).jpg",
          description: "",
        },
        {
          src: window.location.origin + "/storage/images/church_ (1).jpg",
          description: "",
        },
        {
          src:
            window.location.origin +
            "/storage/images/exterior painting (27).jpg",
          description: "",
        },
        {
          src:
            window.location.origin +
            "/storage/images/exterior painting (28).jpg",
          description: "",
        },
        {
          src: window.location.origin + "/storage/images/painting_ (9).jpg",
          description: "",
        },
        {
          src: window.location.origin + "/storage/images/painting_ (8).jpg",
          description: "",
        },
        {
          src: window.location.origin + "/storage/images/painting_ (7).jpg",
          description: "",
        },
        {
          src: window.location.origin + "/storage/images/painting_ (6).jpg",
          description: "",
        },
        {
          src:
            window.location.origin +
            "/storage/images/exterior painting (38).jpg",
          description: "",
        },
        {
          src:
            window.location.origin +
            "/storage/images/exterior painting (42).jpg",
          description: "",
        },
        {
          src:
            window.location.origin +
            "/storage/images/exterior painting (43).jpg",
          description: "",
        },
        {
          src: window.location.origin + "/storage/images/Exterior 4.jpg",
          description: "",
        },
        {
          src: window.location.origin + "/storage/images/Exterior 6.jpg",
          description: "",
        },
        {
          src: window.location.origin + "/storage/images/Exterior 7.jpg",
          description: "",
        },
        {
          src: window.location.origin + "/storage/images/Exterior 8.jpg",
          description: "",
        },
        {
          src:
            window.location.origin +
            "/storage/images/exterior painting (32).jpg",
          description: "",
        },
      ],

      images2: [
        {
          src: window.location.origin + "/storage/images/a1.jpg",
          description: "",
        },
        {
          src: window.location.origin + "/storage/images/a2.jpg",
          description: "",
        },
        {
          src: window.location.origin + "/storage/images/a3.jpg",
          description: "",
        },
        {
          src: window.location.origin + "/storage/images/a4.jpg",
          description: "",
        },
      ],
    };
  },

  created() {
    this.loadingStart();
  },

  mounted() {
    this.loadingEnd();
  },

  methods: {
    loadingStart() {
      this.isLoading = true;
    },
    loadingEnd() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },

    submit() {
      // Add a request interceptor
      axios.interceptors.request.use(
        (config) => {
          this.loading = true;
          return config;
        },
        (error) => {
          this.loading = false;
          return Promise.reject(error);
        }
      );

      // Add a response interceptor
      axios.interceptors.response.use(
        (response) => {
          this.loading = false;
          return response;
        },
        (error) => {
          this.loading = false;
          return Promise.reject(error);
        }
      );

      axios
        .post("/api/messages", this.form)
        .then((res) => {
          this.text = "Message sent successfully!";
          this.form.name = "";
          this.form.email = "";
          this.form.phone = "";
          this.msg = true;
        })
        .catch((err) => {
          this.text = err.response.data.errors[0];
          this.snackbar = true;
        });
    },
  },
};
</script>

<style lang="scss" >
$bp-medium: 50em; // 800px

.VueCarousel-navigation-prev {
  left: 10% !important;
}
.VueCarousel-navigation-next {
  right: 10% !important;
}

.chev-next {
  height: 40px;
  width: 40px;
}

.chev-prev {
  height: 40px;
  width: 40px;
}

.prod {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.welcome {
  position: relative;
  opacity: 0.7;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  background-attachment: fixed;
}

.welcome {
  min-height: 100vh;
  background-image: url("http://localhost:8000/storage/images/home1.jpeg");

  display: grid;
  grid-template-rows: 90vh max-content;
  gap: 20px;
  justify-items: center;
  align-items: center;

  text-align: center;
}

.box--1 {
  min-height: 50vh;
  min-width: 50vw;
  margin: 0 15px;

  grid-row: 1 / 2;
  // background-color: #3ea8ff;
  // background-image: linear-gradient(45deg, #3ea8ff 0%, #04bb62 32%, #fdf943 66%, #fb4343 99%);
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6)
  );
  border-radius: 25px;

  display: grid;
  justify-items: center;
  align-items: center;

  h1 {
    color: white;
    font-size: 3rem;
  }

  @media only screen and (max-width: $bp-medium) {
    font-size: 2.5rem;
    min-width: 80vw;
  }

  .color {
    align-self: start;
    font-style: italic;
    font-size: 26px;

    ._green {
      color: green;
    }
    ._yellow {
      color: yellow;
    }
    ._red {
      color: red;
    }
  }
}

.box--2 {
  min-height: 80vh;
  grid-row: 2 / 3;
  padding: 5rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  justify-content: space-around;
  align-content: space-around;
  grid-gap: 5rem;

  @media only screen and (max-width: $bp-medium) {
    padding: 2.5rem !important;
    grid-gap: 2.5rem !important;
  }

  .intro {
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
    border-radius: 25px;
    color: white;
    margin: 15px;
  }

  .contact {
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    );
    border-radius: 25px;
    margin: 15px;
  }
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

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 30px;
  justify-items: center;
  align-items: start;

  padding: 30px;
  min-height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url("http://localhost:8000/storage/images/Services 1.jpg");
  position: relative;
  opacity: 0.7;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  background-attachment: fixed;

  text-align: center;
  color: white;
}

.services2 {
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-gap: 30px;

  padding: 30px;
  min-height: 50vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url("http://localhost:8000/storage/images/Services 1.jpg");
  position: relative;
  opacity: 0.7;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  background-attachment: fixed;

  text-align: center;
  color: white;

}

.serviceiner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 30px;
  justify-items: center;
  align-items: start;

  text-align: left;
  color: white;
}

.service--1,
.service--2,
.service--3 {
  display: grid;
  grid-template-rows: 100px max-content 1fr;
  grid-gap: 15px;
  margin-top: 50px;
}

.list {
  text-align: start;
}

svg {
  height: 80px;
  fill: white;

  justify-self: center;
  align-self: center;
}
</style>

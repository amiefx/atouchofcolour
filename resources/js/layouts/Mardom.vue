<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" temporary app>
      <sideNavigation />

      <v-divider class="mx-5"></v-divider>

      <!-- third part --->
      <logout />
      <!-- third part --->
    </v-navigation-drawer>

    <div class="hidden-sm-and-down app-bar">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" /> -->

      <div class="top">
        <div class="social">
          <div class="email bold text"><a href="mailto:atouchofcolour@hotmail.com"> atouchofcolour@hotmail.com</a></div>
          <div class="" v-for="icon in socialicons" :key="icon.id" icon>
            <v-btn
              :color="icon.color"
              fab
              small
              dark
              :href="icon.link" target="_blank"
            >
              <v-icon>{{ icon.icon }}</v-icon>
            </v-btn>
          </div>

        </div>
        <div class="logo">
          <router-link to="/">
             <v-img width="380"  :src="logoImg" alt="a touch of colour" />
          </router-link>
        </div>
        <div class="phon font-weight-bold">
          <a href="tel:+61417382263">
            <v-icon color="primary">mdi-phone-in-talk-outline</v-icon>
            +61 417 382 263</a>
        </div>
      </div>
      


      <div class="nav">
        <top-nav />
      </div>

    </div>

    <v-app-bar :clipped-left="$vuetify.breakpoint.mdAndUp" app class="hidden-md-and-up">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" />

      <span class="text-center mx-auto my-auto">
        <router-link to="/">
          <v-img width="55" :src="logoImg2" alt="a touch of colour" />
        </router-link>
      </span>
    </v-app-bar>

    <v-content class="pt-0">

      <slot />

    </v-content>

  <fullFooter />

  </v-app>
</template>

<script>
import fullFooter from './partials/fullFooter'
import TopNav from './partials/TopNav'
import sideNavigation from './partials/sideNavigation'
import Logout from '../components/layouts/Logout'
import LoginAvatar from '../components/layouts/LoginAvatar'
import Search from '../components/layouts/Search'
import MiniCart from '../components/global/MiniCart'
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    source: String
  },
  components: {
    fullFooter,
    TopNav,
    sideNavigation,
    Logout,
    LoginAvatar,
    Search,
    MiniCart
  },
  data: () => ({
    dialog: false,
    drawer: false,
    logoImg: window.location.origin + "/storage/images/Logo3.png",
    logoImg2: window.location.origin + "/storage/images/favicon.png",
    items: [],
    items2: [
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        name: "Company",
        link: "#",
        children: [
          { icon: "mdi-settings", name: "About Us", link: "/pages/about" },
          { icon: "mdi-settings", name: "Contact Us", link: "/pages/contact" }
        ]
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        name: "Policies",
        link: "#",
        children: [
          { icon: "mdi-settings", name: "About Us", link: "/pages/delivery" },
          { icon: "mdi-settings", name: "FAQ's", link: "/pages/faqs" },
          {
            icon: "mdi-settings",
            name: "Order & Returns",
            link: "/pages/orders-returns"
          },
          {
            icon: "mdi-settings",
            name: "Privacy Policy",
            link: "/pages/privacy-plicy"
          }
        ]
      }
    ],

  }),

  computed: {
    ...mapGetters({
       homeSlides: 'home/home_slides',
       socialicons: 'social/social'
    })
  },

  created() {
    this.getHomeSlide();
    this.getSocial();
  },

  methods: {
    ...mapActions({
      getHomeSlide: "home/getHomeSlide",
      getSocial: 'social/getSocial',
    }),
  }


};
</script>

<style lang="scss" scoped>

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}

.menu-icons {
  position: absolute;
  float: right;
  justify-content: right;
  clear: none;
  right: 30px;
}

.nav-menu {
  position: absolute;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
}

.app-bar {
  background-color: #fff;
  display: grid;
  grid-template-rows: 100px 50px;
}

.top {
  grid-row: 1 / 2;

  display: grid;
  grid-template-columns: 25% 50% 25%;

  justify-items: center;
  align-items: center;
  justify-content: space-evenly;

}

.social {
  grid-column: 1 / 2;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);

  justify-items: center;
  align-items: center;

  grid: 8px;

  .email {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }

}

.logo {
  grid-column: 2 / 3;
}

.phon {
  grid-column: 3 / 4;
}

a {
  text-decoration: none;
}

.nav {
  display: grid;
  justify-items: center;
  align-items: center;

  border-bottom: 1px solid #999;
  box-shadow: dimgrey;
}



</style>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" temporary app>
      <sideNavigation />

      <v-divider class="mx-5"></v-divider>
      <!-- second part --->
      <v-list dense>
        <template v-for="item in items2">
          <v-list-group
            v-if="item.children"
            :key="item.name"
            v-model="item.model"
            :append-icon="item.model ? 'mdi-chevron-down' : 'mdi-chevron-up'"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child, i) in item.children" :key="i" link :to="child.link">
              <v-list-item-action v-if="child.icon">
                <v-icon>mdi-chevron-right</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.name" link :to="item.link">
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <!-- second part --->

      <!-- third part --->
      <logout />
      <!-- third part --->
    </v-navigation-drawer>

    <v-app-bar extended :clipped-left="$vuetify.breakpoint.mdAndUp" app class="hidden-sm-and-down">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" />

      <div class="logo">
        <div>
          <router-link to="/">
             <v-img height="60" width="70" :src="logoImg" alt="Khodgi" />
          </router-link>
        </div>
      </div>
      <div class="menu-icons mt-5">

            <Search />

            <login-avatar />

            <MiniCart />

      </div>


      <template v-slot:extension class="nav-menu d-flex justify-center">
        <top-nav />
      </template>

    </v-app-bar>

    <v-app-bar :clipped-left="$vuetify.breakpoint.mdAndUp" app class="hidden-md-and-up">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" />

      <span class="text-center mx-auto my-auto">
        <router-link to="/">
          <v-img width="55" :src="logoImg" alt="Khodgi" />
        </router-link>
      </span>

      <Search />

      <MiniCart />
    </v-app-bar>

    <v-content>

      <div v-if="this.$route.path == '/'">
      <v-carousel hide-delimiters height="600" class="hidden-sm-and-down">
        <v-carousel-item
          v-for="(item,i) in homeSlides"
          :key="i"
          :src="item.large_image"
          :to="`/products/categories/${item.link}`"
        ></v-carousel-item>
      </v-carousel>

      <v-carousel hide-delimiters height="600" class="hidden-md-and-up">
        <v-carousel-item
          v-for="(item,i) in homeSlides"
          :key="i"
          :src="item.small_image"
          :to="`/products/categories/${item.link}`"
        ></v-carousel-item>
      </v-carousel>
    </div>

      <v-container fluid>
        <slot />
      </v-container>
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
    logoImg: window.location.origin + "/storage/images/khodgilogo.png",
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
       homeSlides: 'home/home_slides'
    })
  },

  created() {
    this.getHomeSlide();
  },

  methods: {
    ...mapActions({
      getHomeSlide: "home/getHomeSlide",
    }),
  }


};
</script>

<style scoped>
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

.logo {
  position: absolute;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  top: 10px;
}

.nav-menu {
  position: absolute;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
}

</style>

<template>
  <v-app id="am">
    <v-navigation-drawer
      v-model="drawer"
      :permanent="$vuetify.breakpoint.mdAndUp"
      clipped
      app>
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
         <v-img width="55" :src="logoImg" alt="Khodgi" />
      </span>

      <minicart />
    </v-app-bar>

    <v-content>
      <v-container>
        <slot />
      </v-container>
    </v-content>

    <v-footer padless app>
      <v-row justify="center" no-gutters>
        <v-col cols="12" class="text-center body-2 py-4">
          &copy; {{ new Date().getFullYear() }} —
          <strong>Khodgi</strong>
          <span>
            | Tech Partner
            <a class="default--text" href="https://wogale.com">Wogale</a>
          </span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import TopNav from './partials/TopNav'
import Logout from '../components/layouts/Logout'
import LoginAvatar from '../components/layouts/LoginAvatar'
import Search from '../components/layouts/Search'
import MiniCart from '../components/global/MiniCart'
// import { mapActions } from "vuex";
export default {
  props: {
    source: String
  },
  components: {
    TopNav,
    Logout,
    LoginAvatar,
    Search,
    MiniCart
  },
  data: () => ({
    dialog: false,
    drawer: false,
    loggedIn: false,
    users: [],
    homeslides: [],
    homesections: [],
    logoImg: window.location.origin + "/storage/images/khodgilogo.png",
    items: [],
    items2: [
        { icon: 'mdi-view-dashboard', name: 'Profile', link: '/account' },
        { icon: 'mdi-cart', name: 'My Orders', link: '/account/orders' },
        { icon: 'mdi-chat', name: 'My Reviews', link: '/account/reviews' },
        // { icon: 'mdi-account-circle', name: 'My Profile', link:'/account/profile' },
    ],
    socialicons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-google-plus",
      "mdi-linkedin",
      "mdi-instagram"
    ]
  }),

//   methods: {
//     ...mapActions({
//       signOutAction: "auth/signOut",
//     }),

//     logout() {
//       this.signOutAction().then(() => {
//         this.$router.replace({
//           name: "home"
//         });
//       });
//     }
//   }

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
}

ul {
  list-style-type: none;
}
</style>

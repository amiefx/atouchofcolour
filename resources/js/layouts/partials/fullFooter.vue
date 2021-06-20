<template>
  <v-footer padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="icon in socialicons" :key="icon.id" class="mx-4 hidden-md-and-up" icon :href="icon.link" target="_blank">
          <v-icon size="24px">{{icon.icon}}</v-icon>
        </v-btn>
        <v-col class="py-3 text-center body-2 hidden-md-and-up" cols="12">
          &copy; {{ new Date().getFullYear() }} —
          <strong>A Touch of Colour</strong>
        </v-col>

        <v-col cols="4" class="text-center mt-3 hidden-sm-and-down">
          <ul>
            <v-btn text small>Company</v-btn>
          </ul>
          <ul>
            <li>
              <v-btn x-small text to="/about">About Us</v-btn>
            </li>
            <li>
              <v-btn x-small text to="/contact">Contact Us</v-btn>
            </li>
            <li>
              <v-btn x-small text to="/faqs">FAQ's</v-btn>
            </li>
          </ul>
        </v-col>
        <v-col cols="4" class="text-center mt-3 hidden-sm-and-down">
          <ul>
            <v-btn text small>Admin</v-btn>
          </ul>
          <ul>
            <li>
              <v-btn x-small text to="/signin">Signin</v-btn>
            </li>
          </ul>
        </v-col>
        <v-col cols="4" class="text-center mt-3 hidden-sm-and-down">
          <p>
            <v-btn text small>Get Connection</v-btn>
          </p>
          <p>
            <a href="tel:+61417382263">+61 417 382 263</a>
          </p>
          <v-btn v-for="icon in socialicons" :key="icon.id" class="mx-4" icon :href="icon.link" target="_blank">
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" class="text-center body-2 pb-3 pt-8 hidden-sm-and-down">
          &copy; {{ new Date().getFullYear() }} —
          <strong>A TOUCH OF COULOURS</strong>
          <!-- <span class="">
            | Tech Partner
            <a class="default--text" href="https://wogale.com">Wogale</a>
          </span> -->
        </v-col>
      </v-row>
    </v-footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

    created() {
        this.getSocial()
    },

  computed: {
    ...mapGetters({
       socialicons: 'social/social'
    })
  },

  methods: {
    ...mapActions({
            getSocial: 'social/getSocial',
        }),

    link() {
      return 'www.google.com'
    }
  }

}
</script>

<style scoped>
  ul {
      list-style-type: none;
    }

  a {
  text-decoration: none;
}
</style>

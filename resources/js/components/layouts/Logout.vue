<template>
  <div>
    <v-divider class="mx-5"></v-divider>
    <div v-if="!authenticated">
      <v-list-item dense :to="{ name: 'signin'}">
        <v-list-item-content>
          <v-list-item-title>Log In</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item dense :to="{ name: 'register'}">
        <v-list-item-content>
          <v-list-item-title>Register</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>

    <div v-else>
      <v-list-item dense>
        <v-list-item-content>
          <v-list-item-title v-if="user">Logged In as user {{user.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item dense @click="logout">
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    })
  },

  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),

    logout() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "home"
        });
      });
    }
  }
};
</script>

<style>
</style>

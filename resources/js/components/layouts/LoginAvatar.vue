<template>

      <v-tooltip bottom v-if="!authenticated">
          <template v-slot:activator="{ on }">
            <v-btn icon :to="{ name: 'signin'}">
              <v-icon v-on="on">mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <span>Login</span>
        </v-tooltip>


      <v-menu offset-y v-else>
        <template v-slot:activator="{ on }">
          <v-btn icon large v-on="on">
            <v-avatar size="32px" item>
              <v-img :src="user.photo" alt="user" />
            </v-avatar>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item to="/account">
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="admin" to="/admin/dashboard">
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout()">
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      admin: "auth/admin"
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

<style scoped>
  .menu-icons {
    position: absolute;
    float: right;
    justify-content: right;
    clear: none;
    right: 30px;
  }
</style>

<template>
  <v-container>
    <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="5">
      <v-card class="elevation-12 pb-5">
        <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            absolute
            top
            color="primary"
          ></v-progress-linear>

        <v-toolbar color="" flat>
          <v-toolbar-title>Register form</v-toolbar-title>
        </v-toolbar>

      <v-form v-model="valid" method="post" @submit.prevent="submit">
        <v-card-text>
            <v-text-field
              v-model="form.name"
              prepend-icon="mdi-account"
              label="User Name"
              :rules="[rules.required, rules.min]"
            ></v-text-field>
            <v-text-field
              v-model="form.email"
              prepend-icon="mdi-email"
              label="Email"
              :rules="[rules.required, rules.validEmail]"
            ></v-text-field>
            <v-text-field
              v-model="form.password"
              label="Password"
              :rules="[rules.required, rules.minpass]"
              prepend-icon="mdi-lock"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
            ></v-text-field>
            <v-text-field
              v-model="form.password_confirmation"
              label="ReType Password"
              :rules="[rules.required, passwordMatch]"
              prepend-icon="mdi-lock"
                :type="showPassword2 ? 'text' : 'password'"
                :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword2 = !showPassword2"
            ></v-text-field>

            <vue-recaptcha ref="recaptcha"
                @verify="onVerify" sitekey="6Lc0fNsZAAAAAJoq33n9PPWeN7nWgNeJDBVaNNZ1">
            </vue-recaptcha>

        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn v-if="!loading" color="primary" block :disabled="!valid" type="submit">Register</v-btn>
        </v-card-actions>
        </v-form>
        <v-card-text class="text-center pb-0">
          Already have and account?
          <router-link :to="{name: 'signin'}">
            login
          </router-link>
        </v-card-text>
      </v-card>


      <v-snackbar v-model="snackbar">
        {{ text }}
        <v-btn color="white" text @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
export default {
  layout: 'mardom',
  middleware: ['guest'],
  components: {
        'vue-recaptcha': VueRecaptcha
    },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Register',
    titleTemplate: '%s | Khodgi'
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      robot: false
    },
    valid: true,
    loading: false,
    snackbar: false,
    text: '',
    showPassword: false,
    showPassword2: false,
    rules: {
      required: v => !!v || 'This Field is Required',
      min: v => v.length >= 3 || 'Minimum 5 Chracters Required',
      minpass: v => v.length >= 8 || 'Minimum 8 Chracters Required',
      validEmail: v => /.+@.+\..+/.test(v) || 'Email must be valid'
    }
  }),
  computed: {
    passwordMatch() {
      return this.form.password != this.form.password_confirmation
        ? 'Password does Not Match'
        : true
    }
  },
  methods: {
    submit() {

    if (this.form.robot) {
      // Add a request interceptor
      axios.interceptors.request.use(
        config => {
          this.loading = true
          return config
        },
        error => {
          this.loading = false
          return Promise.reject(error)
        }
      )

      // Add a response interceptor
      axios.interceptors.response.use(
        response => {
          this.loading = false
          return response
        },
        error => {
          this.loading = false
          return Promise.reject(error)
        }
      )

      axios.post('/api/register', this.form)
      .then(res => {
          this.text = "Resistered Successfully!";
          this.snackbar = true;
          this.$router.push('/signin')
      })
      .catch(err => {
          this.text = err.response.data.errors.email[0]
          this.snackbar = true;
      })
    }
    },

    onVerify: function (response) {
        if (response) this.form.robot = true;
    },

  }
}
</script>

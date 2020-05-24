<template>
      <v-container>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="5"
          >
            <v-card class="elevation-12">
              <v-progress-linear
                :active="loading"
                :indeterminate="loading"
                absolute
                top
                color="primary"
                ></v-progress-linear>

              <v-toolbar
                color=""
                flat
              >
                <v-toolbar-title>Reset Password</v-toolbar-title>
              </v-toolbar>
              <v-form v-model="valid" method="post" @submit.prevent="submit">
              <v-card-text>

                  <v-text-field
                    label="Email"
                    v-model="form.email"
                    :rules="[rules.required, rules.validEmail]"
                    name="login"
                    prepend-icon="mdi-account-circle"
                    type="text"
                    disabled
                    required
                  />

                  <v-text-field
                    id="password"
                    label="New Password"
                    v-model="form.password"
                    :rules="[rules.required, rules.minpass]"
                    name="password"
                    prepend-icon="mdi-lock"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    required
                  />

                  <v-text-field
                    id="password_confirmation"
                    label="Confirm Password"
                    v-model="form.password_confirmation"
                    :rules="[rules.required, passwordMatch]"
                    name="password_confirmation"
                    prepend-icon="mdi-lock"
                    :type="showPassword2 ? 'text' : 'password'"
                    :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword2 = !showPassword2"
                    required
                  />

              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn v-if="!loading" color="primary" block :disabled="!valid" type="submit">Reset Password</v-btn>
              </v-card-actions>
              </v-form>
            </v-card>

            <v-snackbar
            v-model="snackbar"
            >
            {{ text }}
            <v-btn
                color="white"
                text
                @click="snackbar = false"
            >
                Close
            </v-btn>
            </v-snackbar>

          </v-col>
        </v-row>
      </v-container>
</template>

<script>
  export default {
    layout: 'mardom',
    middleware: ['guest'],
      name: 'About',
        metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Login',
        titleTemplate: '%s | Khodgi'
        },

      data(){
          return {
              form: {
                email: '',
                password: '',
                password_confirmation: '',
                token: ''
              },
              text: '',
              loading: false,
              snackbar: false,
              showPassword: false,
              showPassword2: false,
              valid: true,
              rules: {
                required: v => !!v || 'This Field is Required',
                min: v => v.length >= 3 || 'Minimum 5 Chracters Required',
                minpass: v => v.length >= 8 || 'Minimum 8 Chracters Required',
                validEmail: v => /.+@.+\..+/.test(v) || 'Email must be valid'
              }
          }
      },

      created () {
            this.form.email = this.$route.query.email
            this.form.token = this.$route.query.token
        },

        computed: {
        passwordMatch() {
          return this.form.password != this.form.password_confirmation
            ? 'Password does Not Match'
            : true
        }
      },

      methods: {
        submit() {
              // Add a request interceptor
            axios.interceptors.request.use((config) => {
                this.loading = true
                return config;
            },  (error) => {
                this.loading = false
                return Promise.reject(error);
            });

            // Add a response interceptor
            axios.interceptors.response.use((response) => {
                this.loading = false
                return response;
            }, (error) => {
                this.loading = false
                return Promise.reject(error);
            });

            axios.post('/api/password/reset', {'email': this.form.email, 'password': this.form.password, 'password_confirmation': this.form.password_confirmation, 'token': this.form.token})
              .then(res => {
                    if(this.$auth.user.role == 'Administrator') {
                        this.$router.replace({ name: 'dashboard' })
                    }else{
                        this.$router.replace({ name: 'account' })
                    }
                })
                .catch( err => {
                    this.text = err.response.data.errors.email[0]
                    this.snackbar = true
                })

          }
      },

  }
</script>

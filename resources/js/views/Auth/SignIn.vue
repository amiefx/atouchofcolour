<template>
      <v-app>
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
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-form v-model="valid" method="post" @submit.prevent="submit">
              <v-card-text>

                  <v-text-field
                    label="Login"
                    v-model="form.email"
                    :rules="[rules.required, rules.validEmail]"
                    name="login"
                    prepend-icon="mdi-account-circle"
                    type="text"
                    required
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    v-model="form.password"
                    :rules="[rules.required, rules.minpass]"
                    name="password"
                    prepend-icon="mdi-lock"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    required
                  />

                  <vue-recaptcha ref="recaptcha"
                    @verify="onVerify" sitekey="6LfyD_4UAAAAAERoUg4F4avADxNTXtiIOAOYoa0z">
                  </vue-recaptcha>

              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn v-if="!loading" color="primary" block :disabled="!valid" type="submit">Login</v-btn>
              </v-card-actions>
              </v-form>
              <v-card-actions class="d-flex justify-end mr-2">
                      <router-link class="overline" :to="{ name: 'forgot-password'}" > Forgot Password </router-link>
              </v-card-actions>
            </v-card>

           <div class="d-flex justify-center mt-3">
               <div class="caption mr-3 mt-1">Don't have Account?</div>
               <div>
                   <router-link class="overline" :to="{ name: 'register'}" > SignUp </router-link>
                </div>
           </div>

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
      </v-app>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
import { mapGetters, mapActions } from "vuex";
  export default {
      components: {
            'vue-recaptcha': VueRecaptcha
        },
      data(){
          return {
              form: {
                email: '',
                password: '',
                robot: false
              },
              text: '',
              loading: false,
              snackbar: false,
              showPassword: false,
              valid: true,
              rules: {
                required: v => !!v || 'This Field is Required',
                min: v => v.length >= 3 || 'Minimum 5 Chracters Required',
                minpass: v => v.length >= 8 || 'Minimum 8 Chracters Required',
                validEmail: v => /.+@.+\..+/.test(v) || 'Email must be valid'
              }
          }
      },
      methods: {
          ...mapActions({
                signIn: 'auth/signIn'
            }),

          submit() {

            if (this.form.robot) {

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

            this.signIn(this.form)
                .then(res => {
                    if(this.user.role == 'Administrator') {
                        this.$router.replace({ name: 'dashboard' })
                    }else{
                        this.$router.replace({ name: 'account' })
                    }
                })
                .catch( err => {
                    this.text = err.response.data.errors.email[0]
                    this.snackbar = true
                })

            // this.$auth.loginWith('local', { data: this.form })
            //     .then(res => {
            //         if(this.$auth.user.role == 'Administrator') {
            //             this.$router.replace({ name: 'admin' })
            //         }else{
            //             this.$router.replace({ name: 'account' })
            //         }
            //     })
            //     .catch( err => {
            //         this.text = err.response.data.errors.email[0]
            //         this.snackbar = true
            //     })

          }

          },

          onVerify: function (response) {
            if (response) this.form.robot = true;
          },

      },

      computed: {
            ...mapGetters({
            authenticated: "auth/authenticated",
            user: "auth/user"
            })
        },

  }
</script>

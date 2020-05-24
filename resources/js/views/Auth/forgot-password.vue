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

              <!-- <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>

              </v-toolbar> -->

              <v-form v-model="valid" method="post" @submit.prevent="submit">
              <v-card-text class="pt-8">

                  <v-text-field
                    label="Email"
                    v-model="form.email"
                    :rules="[rules.required, rules.validEmail]"
                    name="email"
                    prepend-icon="mdi-account-circle"
                    type="text"
                    required
                  />

              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn v-if="!loading" color="primary" block :disabled="!valid" type="submit">Send reset link</v-btn>
              </v-card-actions>
              </v-form>
              <v-card-actions class="d-flex justify-end mr-2">
                      <router-link class="overline" :to="{ name: 'signin'}" > Back to login </router-link>
              </v-card-actions>
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

            axios.post('/api/password/email',{'email': this.form.email})
                .then(res => {
                   this.text = 'We have e-mailed your password reset link!'
                   this.snackbar = true
                })
                .catch( err => {
                   this.text = console.log(err.response)
                   this.text = err.response.data.email
                   this.snackbar = true
                })

          }
      },

  }
</script>

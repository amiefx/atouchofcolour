<template>
    <div class="">
        <v-form v-model="valid" method="post" @submit.prevent="submit">
            <v-text-field v-model="form.name" class="" label="Name" outlined dense :rules="[rules.required]"></v-text-field>
            <v-text-field v-model="form.email" class="mt-n3" label="Email" outlined dense :rules="[rules.required]"></v-text-field>
            <v-text-field v-model="form.phone" class="mt-n3" label="Phone" outlined dense :rules="[rules.required]"></v-text-field>
            <v-textarea v-model="form.message" class="mt-n3" label="Message" outlined dense :rules="[rules.required]"></v-textarea>
            <v-alert dark color="primary" dense v-if="msg">
              {{ text }}
            </v-alert>
             <v-btn :loading="loading" color="primary" block :disabled="!valid" type="submit">Send</v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
  layout: 'mardom',

    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Contact Us' ,
        titleTemplate: '%s | A TOUCH OF COLOUR'
        },

    data: ()=> ({
        form: {
          name: '',
          email: '',
          phone: '',
          message: '',
        },
        text: '',
        msg: false,
        valid: true,
        loading: false,
        rules: {
          required: v => !!v || 'This Field is Required',
          min: v => v.length >=5 || 'Minimum 5 Chracters Required',
          validEmail: v => /.+@.+\..+/.test(v) || 'Email must be valid',
      },
    }),

    methods: {
    submit() {

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

      axios.post('/api/messages', this.form)
      .then(res => {
          this.text = "Message sent successfully!";
          this.form.name = '';
          this.form.email = '';
          this.form.phone = '';
          this.form.message = '';
          this.msg = true;
      })
      .catch(err => {
          this.text = err.response.data.errors[0]
          this.snackbar = true;
      })
    },

    }
};
</script>

<style>
</style>

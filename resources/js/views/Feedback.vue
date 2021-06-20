<template>
  <v-container fluid>
    <div class="pb-10 pt-3">
      <v-row class="d-flex justify-center mt-5">
        <h1>LEAVE US FEEDBACK</h1>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-row>
    </div>
    <div class="mx-12">
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="px-6 text-center text1">
            
            <h2>
                We appreciate our customers taking the time to share their experiences and look forward to working with you.
            </h2>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          
          <!--review form --->
      <v-col cols="12">
        <v-form v-model="valid" method="post" v-on:submit.stop.prevent="submit">
          <v-text-field
            v-model="form.name"
            class="mt-2"
            label="Name"
            outlined
            dense
            :rules="[rules.required, rules.min]"
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            class="mt-n3"
            label="Email"
            outlined
            dense
            :rules="[rules.required, rules.validEmail]"
          ></v-text-field>
          <v-rating
            v-model="form.rating"
            background-color="grey"
            color="black accent-4"
            dense
            hover
            class="mt-n3"
            aria-label="Rating"
            :rules="[rules.required]"
          ></v-rating>
          <v-text-field
            v-model="form.title"
            class="mt-2"
            label="Review Title"
            outlined
            dense
            :rules="[rules.required]"
          ></v-text-field>
          <v-textarea
            v-model="form.body"
            class="mt-n3"
            label="Review Body"
            outlined
            dense
            :rules="[rules.required]"
          ></v-textarea>
          <v-btn
            class="float-right mt-n3"
            type="submit"
            :disabled="!valid"
            :loading="loading"
            @click.prevent="submit"
            dark
          >Submit</v-btn>
          <v-divider class="mt-10"></v-divider>
        </v-form>
      </v-col>
      <!--review form --->

        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: 'mardom',
  components: {
    
  },

    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Feedback' ,
        titleTemplate: '%s | A Touch of Colour'
        },

    data: ()=> ({
       form: {
        name: '',
        email: '',
        rating: null,
        title: '',
        body: ''
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

      axios.post('/api/ratings', this.form)
      .then(res => {
          this.$router.replace({ name: 'home' })
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
a {
  text-decoration: none;
  font-weight: 800;
}

.text1 {
    align-items: center;
}
</style>

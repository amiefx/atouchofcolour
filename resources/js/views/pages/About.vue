<template>
  <v-container fluid>
        <div class="pb-10 pt-3">
            <v-row class="d-flex justify-center mt-5">
            <h1>ABOUT US</h1>
            </v-row>
            <v-row class="d-flex justify-center mb-2">
            <v-icon>mdi-dots-horizontal</v-icon>
            </v-row>
        </div>
          <div class="text-justify mx-12" v-html="text.text"></div>
  </v-container>
</template>

<script>
export default {
  layout: 'mardom',

    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'About Us' ,
        titleTemplate: '%s | Khodgi'
        },

  data: () => ({
    text: '',
  }),

  created() {
      axios.get('/api/about')
      .then(res => {
          this.text= res.data.about
      })
  }

}
</script>

<style>

</style>

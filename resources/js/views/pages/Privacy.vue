<template>
  <v-container fluid>
        <div class="pb-10 pt-3">
            <v-row class="d-flex justify-center mt-5">
            <h1>PRIVACY POLICY</h1>
            </v-row>
            <v-row class="d-flex justify-center mb-2">
            <v-icon>mdi-dots-horizontal</v-icon>
            </v-row>
        </div>
          <div class=" mx-12" v-html="text.text"></div>
  </v-container>
</template>

<script>
export default {
    layout: 'mardom',

    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Privacy Policy' ,
        titleTemplate: '%s | Khodgi'
        },

  data: () => ({
    text: '',
  }),

  created() {
      axios.get('/api/privacy')
      .then(res => {
          this.text= res.data.privacy
      })
  }

}
</script>

<style>

</style>

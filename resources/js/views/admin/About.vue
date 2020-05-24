<template>
  <div>
      <vue-editor v-model="text" />
      <div class="mt-2">
          <v-btn color="primary" v-if="text_id != 1" @click="create" dark>Save</v-btn>
      <v-btn color="primary" @click="update" dark>Update</v-btn>
      </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
    components: {
    },

    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'About Us' ,
        titleTemplate: '%s | Khodgi'
        },

  data: () => ({
    text: 'null',
    text_id: '',
  }),

  created () {
      axios.get('/api/admin/about')
            .then(res => {
                this.text = res.data.about.text;
                this.text_id = res.data.about.id;
            })
            .catch(err => console.log(err.response))
  },

  methods: {
      create() {
          axios.post('/api/admin/about', {text: this.text})
            .then(res => {
                this.text = res.data.about.text;
                this.text_id = res.data.about.id;
            })
            .catch(err => console.log(err.response))
      },
      update() {
          axios.put('/api/admin/about/1', {text: this.text})
            .then(res => {
                this.text = res.data.about.text;
                this.text_id = res.data.about.id;
            })
            .catch(err => console.log(err.response))
      }
  }
}
</script>

<style>

</style>

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
    middleware: ['auth', 'admin'],
    components: {
    },

    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Delivery' ,
        titleTemplate: '%s | Khodgi'
        },


  data: () => ({
    text: '',
    text_id: '',
  }),

  created () {
      axios.get('/api/admin/delivery')
            .then(res => {
                this.text = res.data.delivery.text;
                this.text_id = res.data.delivery.id;
            })
            .catch(err => console.log(err.response.data))
  },

  methods: {
      create() {
          axios.post('/api/admin/delivery', {text: this.text})
            .then(res => {
                this.text = res.data.delivery.text;
                this.text_id = res.data.delivery.id;
            })
            .catch(err => console.log(err.response.data))
      },
      update() {
          axios.put('/api/admin/delivery/1', {text: this.text})
            .then(res => {
                this.text = res.data.delivery.text;
                this.text_id = res.data.delivery.id;
            })
            .catch(err => console.log(err.response.data))
      }
  }
}
</script>

<style>

</style>

<template>

<div>
  <v-data-table
    :headers="headers"
    :items="notify"
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Latest notify</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <!-- <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Role</v-btn>
          </template> -->
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.name" label="Role Name"></v-text-field>
                  </v-col>
                  <!-- <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                  </v-col> -->
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="replyItem(item)"
      >
        mdi-check-circle
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>

  <v-snackbar
    v-model="snackbar"
    >
    {{text}}
    <v-btn
        color="white"
        text
        @click="snackbar = false"
    >
        Close
    </v-btn>
  </v-snackbar>
</div>

</template>

<script>
  export default {
    layout: 'admin',
    middleware: ['auth', 'admin'],
      metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'notify',
        titleTemplate: '%s | Khodgi'
        },
    data: () => ({
      dialog: false,
      snackbar: false,
      text: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Mobile', value: 'mobile' },
        { text: 'Email', value: 'email' },
        { text: 'Product', value: 'product' },
        { text: 'Replied', value: 'repllied' },
        { text: 'Date', value: 'date' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      notify: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        mobile: '',
        email: '',
        product: '',
        title: '',
        repllied: '',
        date: '',
      },
      defaultItem: {
        id: '',
        mobile: '',
        email: '',
        product: '',
        title: '',
        repllied: '',
        date: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
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

            axios.get('/api/notifyme')
                .then(res => this.notify = res.data.notify)
                .catch(err => {

                })
      },

      editItem (item) {
        this.editedIndex = this.roles.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.notify.indexOf(item)
        let decide = confirm('Are you sure you want to delete this item?')
        if(decide){
            axios.delete('/api/notifyme/'+item.id)
            .then(res => {
                this.texgt = 'Review deleted successfully.';
                this.snackbar = true
                this.notify.splice(index, 1)
            })
            .catch(err => console.log(err.response))
        }
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
            axios.put('/api/admin/roles/'+this.editedItem.id, {'name': this.editedItem.name})
             //   .then(res => Object.assign(this.roles[this.editedIndex], res.data.data.role))
              //  .catch(err => console.log(err.response))
          Object.assign(this.roles[this.editedIndex], this.editedItem)
        } else {
            axios.post('/api/admin/roles', {'name': this.editedItem.name})
                .then(res => this.roles.push(res.data.data.role))
                .catch(err => console.dir(err.response))
        }
        this.close()
      },

      replyItem (item) {
        const index = this.notify.indexOf(item)
            axios.put('/api/notifyme/reply/'+item.id)
            .then(res => {
                this.text = 'Email sent successully.'
                this.snackbar = true
                this.notify.splice(index, 1)
            })
            .catch(err => console.log(err.response))
      },
    },
  }
</script>

<template>

<div>
  <v-data-table
    :headers="headers"
    :items="coupons"
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Coupons</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Coupon</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.code" label="Code"></v-text-field>
                    <v-select
                      v-model="editedItem.type"
                      :items="type"
                      label="Type"
                    ></v-select>
                    <v-text-field v-model="editedItem.value" label="Value"></v-text-field>
                    <v-text-field v-model="editedItem.percent_off" label="Percentage"></v-text-field>
                    <v-switch label="Status" v-model="editedItem.is_active"></v-switch>
                  </v-col>
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
        @click="editItem(item)"
      >
        mdi-pencil
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
    Record deleted successfully.
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
        title: 'Coupons',
        titleTemplate: '%s | Khodgi'
        },
    data: () => ({
      dialog: false,
      snackbar: false,
      headers: [
        {
          text: '#',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Code', value: 'code' },
        { text: 'Type', value: 'type' },
        { text: 'Value', value: 'value' },
        { text: 'Percent_off', value: 'percent_off' },
        { text: 'Status', value: 'is_active' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      coupons: [],
      type:['fixed', 'percent'],
      editedIndex: -1,
      editedItem: {
        id: '',
        code: '',
        type: '',
        value: '',
        percent_off: '',
        is_active: ''
      },
      defaultItem: {
        id: '',
        code: '',
        type: '',
        value: '',
        percent_off: '',
        is_active: ''
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

            axios.get('/api/admin/coupons')
                .then(res => this.coupons = res.data.coupons)
                .catch(err => {
                    console.log(err)
                })
      },

      editItem (item) {
        this.editedIndex = this.coupons.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.coupons.indexOf(item)
        let decide = confirm('Are you sure you want to delete this item?')
        if(decide){
            axios.delete('/api/admin/coupons/'+item.id)
            .then(res => {
                this.snackbar = true
                this.coupons.splice(index, 1)
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
            axios.put('/api/admin/coupons/'+this.editedItem.id, this.editedItem)
             //   .then(res => Object.assign(this.coupons[this.editedIndex], res.data.data.coupon))
              //  .catch(err => console.log(err.response))
          Object.assign(this.coupons[this.editedIndex], this.editedItem)
        } else {
            axios.post('/api/admin/coupons', this.editedItem)
                .then(res => this.coupons.push(res.data.coupon))
                .catch(err => console.dir(err.response))
        }
        this.close()
      },
    },
  }
</script>

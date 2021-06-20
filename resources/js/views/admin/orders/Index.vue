<template>
  <v-data-table
    :headers="headers"
    :items="orders.data"
    :items-per-page=5
    class="elevation-1"
    item-key="id"
    :loading="loading"
    @pagination="paginate"
    :options.sync="options"
    :server-items-length="orders.total"
    loading-text="Loading.. Please Wait!"
    @input="selectAll"
    :footer-props="{
        itemsPerPageOptions: [5,10,15],
        'show-current-page': true,
        'show-first-last-page': true
    }"
  >
    <template v-slot:top>
      <v-toolbar flat color="">
        <v-toolbar-title>Order Management</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>

      </v-toolbar>

          <v-text-field
            @input="searchIt"
            append-icon="mdi-search"
            label="Search"
            single-line
            hide-details
            class="mx-4"
          ></v-text-field>

    </template>
    <template v-slot:item.action="{ item }">
      <v-btn icon :to="`/admin/orders/${item.id}`">
          <v-icon
        small
      >
        mdi-eye
      </v-icon>
      </v-btn>
    </template>
    <template v-slot:item.total="{ item }">
      <span>{{item.currency_symbol}}{{item.total}}</span>
    </template>
    <template v-slot:item.created_at="{ item }">
      <span>{{item.created_at | date }}</span>
      <!-- <span>{{item.created_at | formatDate}}</span> -->
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>

    <template v-slot:item.photo="{ item }">
        <v-avatar size="36px">
      <img
        :src="item.photo"
        alt="Avatar"
      >
    </v-avatar>
    </template>

    <template v-slot:item.status = "{ item }">
        <v-edit-dialog large block persistent :return-value.sync="item.status" @save="updateStatus(item)">
            {{item.status}}
            <template v-slot:input>
                <v-select v-model="item.status" :items="statusItems" label="Select Status" :rules="[rules.required]"></v-select>
            </template>
        </v-edit-dialog>
    </template>

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

  </v-data-table>

</template>

<script>
//var moment = require('moment');
  export default {
    layout: 'admin',
    middleware: ['auth', 'admin'],
      metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Orders' ,
        titleTemplate: '%s | Khodgi'
        },

    data: () => ({
      valid: true,
      dialog: false,
      loading: false,
      snackbar: false,
      text: '',
      roles: [],
      success: '',
      error: '',
      options: {
          sortBy:['id'],
          sortDesc:[true]
      },
      rules: {
          required: v => !!v || 'This Field is Required',
          min: v => v.length >=5 || 'Minimum 5 Chracters Required',
          validEmail: v => /.+@.+\..+/.test(v) || 'Email must be valid',
      },
      headers: [
        {
          text: '#',
          value: 'id',
        },
        { text: 'Customer Name', value: 'billing_first_name'},
        { text: 'Customer Email', value: 'customer_email' },
        { text: 'Status', value: 'status' },
        { text: 'Total', value: 'total' },
        { text: 'Created', value: 'created_at' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      statusItems: [
          'Canceled', 'Completed', 'On Hold', 'Pending', 'Pending Payment', 'Processing', 'Refunded'
      ],
      orders: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        billing_first_name: '',
        customer_email: '',
        status: '',
        created_at: '',
        total: ''
      },
      defaultItem: {
        id: '',
        billing_first_name: '',
        customer_email: '',
        status: '',
        created_at: '',
        total: ''
      },
    }),

//     filters: {
//       formatDate: function (value) {
//           return moment(value).format('MMMM D, YYYY');
//       }
//   },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      passwordMatch(){
          return this.editedItem.password != this.editedItem.rpassword ? 'Password does Not Match' : true
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
      updateStatus(item) {
          const index = this.orders.data.indexOf(item);
          axios.post('/api/admin/orders/change-status', {'status': item.status, 'order': item.id})
            .then(res => {
               // this.orders.data[index].role = res.data.data.user.role
               this.text = res.data.order.id + " Status Updated to " + res.data.order.status
               this.snackbar = true
                })
            .catch(error => {
                this.text = 'Error Updating Orders Status'
                this.orders.data[index].status = error.response.order.status
                this.snackbar = true
                console.dir(error.response)
                })
      },
      checkEmail() {
          if (/.+@.+\..+/.test(this.editedItem.email)) {
              axios.post('/api/admin/email/verify', {'email': this.editedItem.email})
                .then(res => {
                    this.success = res.data.data.message
                    this.error = '';
                })
                .catch(err => {
                    this.success = '',
                    this.error = 'Email Already Exists'
                })
          }
      },
      selectAll(e){
          this.selected = [];
          if(e.length > 0){
              this.selected = e.map(val => val.id)
          }
          console.dir(this.selected)
      },
      deleteAll(){
          let decide = confirm('Are you sure you want to delete these items?')
            if(decide){
                axios.post('/api/admin/orders/delete', {'orders': this.selected})
                .then(res => {
                    this.text = "Rcords Deleted Successfully!";
                    this.selected.map(val =>{
                        const index = this.orders.data.indexOf(val)
                        this.orders.data.splice(index, 1)
                    })
                    this.snackbar = true
                })
                .catch(err => {
                    console.log(err.response)
                    this.text = "Error Deleting Record"
                    this.snackbar = true
                })
            }
      },
      searchIt(e){
          if(e.length > 3){
              axios.get(`/api/admin/orders/${e}`)
                .then(res => this.orders = res.data.orders)
                .catch(err => console.dir(err.response))
          }
          if(e.length <= 0){
             // axios.get(`/api/admin/orders?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
            //   axios.get(`/api/admin/orders`)
            //     .then(res => this.orders = res.data.data.orders)
            //     .catch(err => console.dir(err.response))

            const sortBy = this.options.sortBy.length == 0 ? 'id' : this.options.sortBy[0];
            const orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'desc' : 'asc';
                axios.get(`/api/admin/orders?page=${e.page}`,{params:{'per_page': e.itemsPerPage, 'sort_by': sortBy, 'order_by': orderBy}})
                .then(res => {
                    this.orders = res.data.orders
                })
                .catch(err => console.dir(err.response))
          }

      },
      paginate(e){
          const sortBy = this.options.sortBy.length == 0 ? 'id' : this.options.sortBy[0];
          const orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'desc' : 'asc';
            axios.get(`/api/admin/orders?page=${e.page}`,{params:{'per_page': e.itemsPerPage, 'sort_by': sortBy, 'order_by': orderBy}})
            .then(res => {
                this.orders = res.data.orders
            })
            .catch(err => {
              //----
            })
        },
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


      },

      editItem (item) {
        this.editedIndex = this.orders.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.orders.data.indexOf(item)
        let decide = confirm('Are you sure you want to delete this item?')
        if(decide){
            axios.delete('/api/admin/orders/'+item.id)
            .then(res => {
                this.snackbar = true
                this.orders.data.splice(index, 1)
            })
            .catch(err => {
                console.log(err.response)
                this.text = "Error Deleting Record";
                this.snackbar = true
            })
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
          const index = this.editedIndex
          axios.put('/api/admin/orders/'+this.editedItem.id, this.editedItem)
        //  .then(res => Object.assign(this.orders[this.editedIndex], this.editedItem))
         .then(res => {
             this.text = "Record Updated Successfully!";
             this.snackbar = true;
             Object.assign(this.orders.data[index], res.data.data.user)
         })
         .catch(err => {
             console.log(err.response)
             this.text = "Error Updating Record"
             this.snackbar=true
         })
        //  Object.assign(this.orders.data[this.editedIndex], this.editedItem)
        } else {
            axios.post('/api/admin/orders', this.editedItem)
            .then(res => {
                this.text = "Record Added Successfully!";
                this.snackbar = true;
                this.orders.data.push(res.data.data.user)
            })
            .catch(err => {
                console.dir(err)
                this.text = "Error Inserting Record";
                this.snackbar = true;
            })
        }
        this.close()
      },
    },
  }
</script>

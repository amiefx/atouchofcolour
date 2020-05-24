<template>
  <div>

  <v-data-table
    :headers="headers"
    :items="users.data"
    :items-per-page=5
    class="elevation-1"
    item-key="id"
    :loading="loading"
    @pagination="paginate"
    :options.sync="options"
    :server-items-length="users.total"
    loading-text="Loading.. Please Wait!"
    show-select
    @input="selectAll"
    :footer-props="{
        itemsPerPageOptions: [5,10,15],
        'show-current-page': true,
        'show-first-last-page': true
    }"
  >
    <template v-slot:top>
      <v-toolbar flat color="">
        <v-toolbar-title>user Management</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New User</v-btn>
            <v-btn color="error" dark class="mb-2 mr-2"  @click="deleteAll">Delete</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-form v-model="valid" method="post" v-on:submit.stop.prevent="save">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="editedItem.name" label="User Name" :rules="[rules.required, rules.min]"></v-text-field>
                   <v-text-field
                        v-if="editedIndex == -1"
                        v-model="editedItem.email"
                        label="Email"
                        :rules="[rules.required, rules.validEmail]"
                        :success-message="success"
                        :error-messages="error"
                        @blur="checkEmail"
                      ></v-text-field>
                    <v-text-field v-if="editedIndex == -1" v-model="editedItem.password" type="password" label="Password" :rules="[rules.required]"></v-text-field>
                    <v-text-field v-if="editedIndex == -1" v-model="editedItem.rpassword" type="password" label="ReType Password" :rules="[rules.required, passwordMatch]"></v-text-field>
                    <v-select v-model="editedItem.role" :items="roles" label="Select Role" :rules="[rules.required]"></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="close">Cancel</v-btn>
              <!-- <v-btn color="blue darken-1" type="submit" :disabled="!valid" @click.prevent="save" text @click="save">Save</v-btn> -->
              <v-btn color="primary" type="submit" :disabled="!valid" @click.prevent="save" >Save</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
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

    <template v-slot:item.photo="{ item }">
        <v-avatar size="36px">
      <img
        :src="item.photo"
        alt="Avatar"
      >
    </v-avatar>
    </template>

    <template v-slot:item.role = "{ item }">
        <v-edit-dialog large block persistent :return-value.sync="item.role" @save="updateRole(item)">
            {{item.role}}
            <template v-slot:input>
                <v-select v-model="item.role" :items="roles" label="Select Role" :rules="[rules.required]"></v-select>
            </template>
        </v-edit-dialog>
    </template>

    <template v-slot:item.is_active = "{ item }">
        <v-edit-dialog large block persistent :return-value.sync="item.is_active" @save="updateStatus(item)">

            <v-chip :color="getColor(item.is_active)" dark>
                <span v-if="item.is_active == 1">Active</span>
                <span v-else>In Active</span>
            </v-chip>
            <template v-slot:input>
                <v-select v-model="item.is_active" :items="status" :item-text="status.text" :item-value="status.value" label="Select Status"></v-select>
            </template>
        </v-edit-dialog>
    </template>

    <template v-slot:item.photo="{ item }">
        <v-edit-dialog>
            <v-avatar size="36px">
                <img :src="item.photo" alt="Avatar" >
            </v-avatar>
            <template v-slot:input>
                <v-file-input
                    v-model="editedItem.photo"
                    label="Select Photo"
                    placeholder="Upload Avatar"
                    accept="image/jpg, image/png, image/bmp, image/jpeg"
                    @change="uploadPhoto(item)"
                />
            </template>
        </v-edit-dialog>
    </template>

  </v-data-table>

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
</div>

</template>

<script>
  export default {
    layout: 'admin',
    middleware: ['auth', 'admin'],
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
          sortBy:['name'],
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
        { text: 'Photo', value: 'photo'},
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Role', value: 'role' },
        { text: 'Status', value: 'is_active' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      status: [
          {text: 'Active', value: true},
          {text: 'In Active', value: false}
      ],
      users: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        email: '',
        role: '',
        is_active: '',
        created_at: '',
        photo: null
      },
      defaultItem: {
        id: '',
        name: '',
        email: '',
        role: '',
        photo: '',
        is_active: '',
        password: '',
        rpassword: '',
        created_at: '',
      },
    }),

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
      uploadPhoto(item){
          if(this.editedItem.photo != null){
              const index = this.users.data.indexOf(item)
             // console.log(this.editedItem);

          let formData = new FormData();
          formData.append('photo', this.editedItem.photo, this.editedItem.photo.name)
          formData.append('user', item.id)
          axios.post('/api/change-photo', formData)
            .then(res => {
                this.users.data[index].photo = res.data.user.photo
                this.editedItem.photo = null
            })
            .catch(err => console.log(err.response))
          }
      },
      updateRole(item) {
          const index = this.users.data.indexOf(item);
          axios.post('/api/change-role', {'role': item.role, 'user': item.id})
            .then(res => {
               // this.users.data[index].role = res.data.data.user.role
               this.text = res.data.user.name + "'s Role Updated to " + res.data.user.role
               this.snackbar = true
                })
            .catch(error => {
                // this.text = error.response.data.user.name + "'s Role Cannot be Updated" + error.response.data.user.role
                this.users[index].role = error.response.user.role
                this.snackbar = true
                console.dir(error.response)
                })
      },
      updateStatus(item) {
          const index = this.users.data.indexOf(item);
          axios.post('/api/change-status', {'status': item.is_active, 'user': item.id})
            .then(res => {
               // this.users.data[index].role = res.data.data.user.role
               this.text = res.data.user.name + "'s Status Updated to " + res.data.user.is_active
               this.snackbar = true
                })
            .catch(error => {
                // this.text = error.response.user.name + "'s Status Cannot be Updated" + error.response.user.status
                this.users.data[index].role = error.response.data.user.role
                this.snackbar = true
                console.dir(error.response)
                })
      },
      checkEmail() {
      if (/.+@.+\..+/.test(this.editedItem.email)) {
        axios
          .post('/api/email/verify', { email: this.editedItem.email })
          .then(res => {
            this.success = res.data.message
            this.error = ''
          })
          .catch(err => {
            ;(this.success = ''), (this.error = 'Email Already Exists')
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
                axios.post('/api/users/delete', {'users': this.selected})
                .then(res => {
                    this.text = "Rcords Deleted Successfully!";
                    this.selected.map(val =>{
                        const index = this.users.data.indexOf(val)
                        this.users.data.splice(index, 1)
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
              axios.get(`/api/users/${e}`)
                .then(res => this.users = res.data.users)
                .catch(err => console.dir(err.response))
          }
          if(e.length <= 0){
             // axios.get(`/api/users?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
            //   axios.get(`/api/users`)
            //     .then(res => this.users = res.data.data.users)
            //     .catch(err => console.dir(err.response))

            const sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
            const orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
                axios.get(`/api/users?page=${e.page}`,{params:{'per_page': e.itemsPerPage, 'sort_by': sortBy, 'order_by': orderBy}})
                .then(res => {
                    this.users = res.data.users
                    this.roles = res.data.roles
                })
                .catch(err => console.dir(err.response))
          }

      },
      paginate(e){
          const sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
          const orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
            axios.get(`/api/users?page=${e.page}`,{params:{'per_page': e.itemsPerPage, 'sort_by': sortBy, 'order_by': orderBy}})
            .then(res => {
                this.users = res.data.users
                this.roles = res.data.roles
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
        this.editedIndex = this.users.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.users.data.indexOf(item)
        let decide = confirm('Are you sure you want to delete this item?')
        if(decide){
            axios.delete('/api/users/'+item.id)
            .then(res => {
                this.snackbar = true
                this.users.data.splice(index, 1)
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
          axios.put('/api/users/'+this.editedItem.id, this.editedItem)
        //  .then(res => Object.assign(this.users[this.editedIndex], this.editedItem))
         .then(res => {
             this.text = "Record Updated Successfully!";
             this.snackbar = true;
             Object.assign(this.users.data[index], res.data.data.user)
         })
         .catch(err => {
             console.log(err.response)
             this.text = "Error Updating Record"
             this.snackbar=true
         })
        //  Object.assign(this.users.data[this.editedIndex], this.editedItem)
        } else {
            axios.post('/api/users', this.editedItem)
            .then(res => {
                this.text = "Record Added Successfully!";
                this.snackbar = true;
                this.users.data.push(res.data.user)
            })
            .catch(err => {
                console.dir(err)
                this.text = "Error Inserting Record";
                this.snackbar = true;
            })
        }
        this.close()
      },

      getColor (status) {
        if (status == 0) return 'red'
        else return 'green'
      },

    },
  }
</script>

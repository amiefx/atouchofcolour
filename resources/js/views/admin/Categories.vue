<template>

<div>
  <v-data-table
    :headers="headers"
    :items="categories"
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Categories</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Category</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                    <v-text-field v-model="editedItem.parent_id" label="Parent ID"></v-text-field>
                    <v-select v-if="editedIndex == -1" v-model="editedItem.is_active" :items="status" :item-text="status.text" :item-value="status.value" label="Select IsActive Status"></v-select>
                    <v-select v-if="editedIndex == -1" v-model="editedItem.is_menu" :items="status" :item-text="status.text" :item-value="status.value" label="Select IsMenu Status"></v-select>
                    <v-select v-if="editedIndex == -1" v-model="editedItem.is_home_section" :items="status" :item-text="status.text" :item-value="status.value" label="Select IsHomeSection Status"></v-select>
                    <v-text-field v-model="editedItem.order" label="Order"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="close">Cancel</v-btn>
              <v-btn color="primary" text @click="save">Save</v-btn>
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

    <template v-slot:item.is_active = "{ item }">
        <v-edit-dialog large block persistent :return-value.sync="item.is_active" @save="updateActiveStatus(item)">

            <v-chip :color="getColor(item.is_active)" dark>
                <span v-if="item.is_active == 1">Yes</span>
                <span v-else>No</span>
            </v-chip>
            <template v-slot:input>
                <v-select v-model="item.is_active" :items="status" :item-text="status.text" :item-value="status.value" label="Select Status"></v-select>
            </template>
        </v-edit-dialog>
    </template>

    <template v-slot:item.is_menu = "{ item }">
        <v-edit-dialog large block persistent :return-value.sync="item.is_menu" @save="updateMenuStatus(item)">

            <v-chip :color="getColor(item.is_menu)" dark>
                <span v-if="item.is_menu == 1">Yes</span>
                <span v-else>No</span>
            </v-chip>
            <template v-slot:input>
                <v-select v-model="item.is_menu" :items="status" :item-text="status.text" :item-value="status.value" label="Select Status"></v-select>
            </template>
        </v-edit-dialog>
    </template>

    <template v-slot:item.is_home_section = "{ item }">
        <v-edit-dialog large block persistent :return-value.sync="item.is_home_section" @save="updateHsectionStatus(item)">

            <v-chip :color="getColor(item.is_home_section)" dark>
                <span v-if="item.is_home_section == 1">Yes</span>
                <span v-else>No</span>
            </v-chip>
            <template v-slot:input>
                <v-select v-model="item.is_home_section" :items="status" :item-text="status.text" :item-value="status.value" label="Select Status"></v-select>
            </template>
        </v-edit-dialog>
    </template>

    <template v-slot:item.image="{ item }">
        <v-edit-dialog>
            <v-avatar size="36px">
                <img :src="item.image" alt="Avatar" >
            </v-avatar>
            <template v-slot:input>
                <v-file-input
                    v-model="editedItem.image"
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
      metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Category',
        titleTemplate: '%s | Khodgi'
        },
    data: () => ({
      text: '',
      dialog: false,
      snackbar: false,
      headers: [
        {
          text: '#',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Image', value: 'image' },
        { text: 'Name', value: 'name' },
        { text: 'Parent ID', value: 'parent_id' },
        { text: 'Active', value: 'is_active' },
        { text: 'Menu', value: 'is_menu' },
        { text: 'Home Section', value: 'is_home_section' },
        { text: 'Order', value: 'order' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      categories: [],
      status: [
          {text: 'Yes', value: true},
          {text: 'No', value: false}
      ],
      rules: {
          required: v => !!v || 'This Field is Required',
      },
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        parent_id: '',
        image: '',
        is_active: '',
        is_menu: '',
        is_home_section: '',
        order: '',
      },
      defaultItem: {
        id: '',
        name: '',
        parent_id: '',
        image: '',
        is_active: '',
        is_menu: '',
        is_home_section: '',
        order: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Category' : 'Edit Category'
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

            axios.get('/api/admin/categories')
                .then(res => this.categories = res.data.data)
                .catch(err => {
                    console.log(err)
                })
      },

      uploadPhoto(item){
          if(this.editedItem.image != null){
              const index = this.categories.indexOf(item)
          let formData = new FormData();
          formData.append('photo', this.editedItem.image, this.editedItem.image.name)
          formData.append('category', item.id)
          axios.post('/api/admin/categories/change-photo', formData)
            .then(res => {
                this.categories[index].image = res.data.category.image
                this.editedItem.image = null
            })
            .catch(err => console.log(err.response))
          }
      },

      updateActiveStatus(item) {
        const index = this.categories.indexOf(item);
        axios.post('/api/admin/categories/change-active', {'is_active': item.is_active, 'category': item.id})
          .then(res => {
              this.text = "Categories active status updated successfully."
              this.snackbar = true
              })
          .catch(error => {
              this.categories[index].role = error.response
              this.snackbar = true
              console.dir(error.response)
              })
      },

      updateMenuStatus(item) {
        const index = this.categories.indexOf(item);
        axios.post('/api/admin/categories/change-menu', {'is_menu': item.is_menu, 'category': item.id})
          .then(res => {
              this.text = "Categories menu status updated successfully."
              this.snackbar = true
              })
          .catch(error => {
              this.categories[index].role = error.response
              this.snackbar = true
              console.dir(error.response)
              })
      },

      updateHsectionStatus(item) {
        const index = this.categories.indexOf(item);
        axios.post('/api/admin/categories/change-home-section', {'is_home_section': item.is_home_section, 'category': item.id})
          .then(res => {
              this.text = "Categories home section status updated successfully."
              this.snackbar = true
              })
          .catch(error => {
              this.categories[index].role = error.response
              this.snackbar = true
              console.dir(error.response)
              })
      },

      editItem (item) {
        this.editedIndex = this.categories.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.categories.indexOf(item)
        let decide = confirm('Are you sure you want to delete this item?')
        if(decide){
            axios.delete('/api/admin/categories/'+item.id)
            .then(res => {
                this.snackbar = true
                this.categories.splice(index, 1)
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
            axios.put('/api/admin/categories/'+this.editedItem.id, this.editedItem)
              //  .then(res => {
              //    Object.assign(this.categories[this.editedIndex], res.data.data)
              //  })
              //  .catch(err => console.log(err.response))
          Object.assign(this.categories[this.editedIndex], this.editedItem)
        } else {
            axios.post('/api/admin/categories', this.editedItem)
                .then(res => {
                  this.categories.push(res.data.category)
                })
                .catch(err => console.dir(err.response))
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

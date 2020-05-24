<template>

<div>
  <v-data-table
    :headers="headers"
    :items="homeslides"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Home Slides</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Slide</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.name" label="Slide Name"></v-text-field>
                    <!-- <v-text-field v-model="editedItem.link" label="Link"></v-text-field> -->
                    <v-select v-model="editedItem.link" :items="links" label="Select link" ></v-select>
                    <v-switch v-model="editedItem.is_active" label="isActive"></v-switch>
                  </v-col>

                  <v-col v-if="editedIndex == -1" cols="12">
                      <input type="file" @change="updateProfile" >
                      <br>
                      <span>Large Image 1499X609</span>
                  </v-col>

                  <v-col v-if="editedIndex == -1" cols="12">
                      <input type="file" @change="updateProfile2" >
                      <br>
                      <span>Small Image 600X800</span>
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

    <template v-slot:item.small_image="{ item }">
        <v-edit-dialog >
            <v-img :src="item.small_image" alt="Avatar" height="36px" width="36px">
            </v-img>
            <template v-slot:input>
                <v-file-input
                    v-model="editedItem.small_image"
                    label="Select Photo"
                    placeholder="Upload Image"
                    accept="image/jpg, image/png, image/bmp, image/jpeg"
                    @change="uploadPhotoS1(item)"
                />
            </template>
        </v-edit-dialog>
    </template>

    <template v-slot:item.large_image="{ item }">
        <v-edit-dialog >
            <v-img :src="item.large_image" alt="Avatar" height="36px" width="50px">
            </v-img>
            <template v-slot:input>
                <v-file-input
                    v-model="editedItem.large_image"
                    label="Select Photo"
                    placeholder="Upload Image"
                    accept="image/jpg, image/png, image/bmp, image/jpeg"
                    @change="uploadPhotoL1(item)"
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
        title: 'Home Slides' ,
        titleTemplate: '%s | Khodgi'
        },

    data: () => ({
      dialog: false,
      snackbar: false,
      text:'',
      links: [],
      headers: [
        {
          text: '#',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Name', value: 'name' },
        { text: 'Large Image', value: 'large_image' },
        { text: 'Small Image', value: 'small_image' },
        { text: 'Link', value: 'link' },
        { text: 'isActive', value: 'is_active' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      homeslides: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        large_image: null,
        small_image: null,
        link: '',
        is_active: ''
      },
      defaultItem: {
        id: '',
        name: '',
        large_image: null,
        small_image: null,
        link: '',
        is_active: ''
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Slide' : 'Edit Slide'
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
        uploadPhotoS1(item) {
           if(this.editedItem.small_image != null) {
                const index = this.homeslides.indexOf(item);
              //  console.log(this.editedItem.small_image);
                let formData = new FormData();
                formData.append('photo', this.editedItem.small_image, this.editedItem.small_image.name)
                formData.append('homeslide', item.id)

            axios.post('/api/admin/home-slides/change-photoS', formData)
            .then(res => {
                this.homeslides[index].small_image = res.data.homeslide.small_image
                this.editedItem.small_image = null
            })
            .catch(err => console.log(err.response))
           }
          },

        uploadPhotoL1(item) {
           if(this.editedItem.large_image != null) {
                const index = this.homeslides.indexOf(item);
           //     console.log(this.editedItem.large_image);
                let formData = new FormData();
                formData.append('photo', this.editedItem.large_image, this.editedItem.large_image.name)
                formData.append('homeslide', item.id)

            axios.post('/api/admin/home-slides/change-photoL', formData)
            .then(res => {
                this.homeslides[index].large_image = res.data.homeslide.large_image
                this.editedItem.large_image = null
            })
            .catch(err => console.log(err.response))
           }
          },

        updateProfile(e) {
            let file = e.target.files[0];
            // console.log(file);
            let reader = new FileReader();
            if (file['size'] < 1000000) {
                reader.onloadend = (file) => {
                //  console.log('RESULT', reader.result)
                this.editedItem.large_image = reader.result;
                }
                reader.readAsDataURL(file);
            } else {
                this.text = 'Image size is greater than 1MB.'
                this.snackbar = true
            }
        },

        updateProfile2(event) {
            let file2 = event.target.files[0];
            // console.log(file);
            let reader2 = new FileReader();
            if (file2['size'] < 1000000) {
                reader2.onloadend = (file2) => {
                //  console.log('RESULT', reader.result)
                this.editedItem.small_image = reader2.result;
                }
                reader2.readAsDataURL(file2);
            } else {
                this.text = 'Image size is greater than 1MB.'
                this.snackbar = true
            }
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

            axios.get('/api/admin/home-slides')
                .then(res => {
                  this.homeslides = res.data.homeslides
                  this.links = res.data.links
                })
                .catch(err => {
                    this.text = err.response.data
                    this.snackbar = true
                })
      },

      editItem (item) {
        this.editedIndex = this.homeslides.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.homeslides.indexOf(item)
        let decide = confirm('Are you sure you want to delete this item?')
        if(decide){
            axios.delete('/api/admin/home-slides/'+item.id)
            .then(res => {
                this.text = 'Item deleted Successfully.'
                this.snackbar = true
                this.homeslides.splice(index, 1)
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
            axios.put('/api/admin/home-slides/'+this.editedItem.id, this.editedItem)
              //  .then(res => Object.assign(this.homeslides[this.editedIndex], res.data.data.homeslide))
              //  .catch(err => console.log(err.response))
            Object.assign(this.homeslides[this.editedIndex], this.editedItem)
            // this.text = 'Slide updated successfully.'
            // this.snackbar = true
        } else {
            axios.post('/api/admin/home-slides', this.editedItem)
                .then(res => this.homeslides.push(res.data.homeslide))
                .catch(err => console.dir(err.response))
        }
        this.close()
      },
    },
  }
</script>

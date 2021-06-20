<template>
  <div>
    <v-container>

      <v-toolbar flat>
      <v-toolbar-title>Edit {{ editedItem.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
          <v-btn text color="primary" :to="{ name: 'admin-products'}">Back to products list</v-btn>
      </div>
    </v-toolbar>

      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header v-slot="{ open }">
            <v-row no-gutters>
              <v-col cols="4">General</v-col>
              <v-col cols="8" class="text--secondary">
                <v-fade-transition leave-absolute></v-fade-transition>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row no-gutters class="d-flex justify-space-around">
              <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                <!-- <v-checkbox v-model="editedItem.isActive" label="isActive"></v-checkbox> -->
              </v-col>
              <v-divider vertical class="mx-4 hidden-xs-only"></v-divider>
              <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                <v-select
                  v-model="editedItem.category_id"
                  :items="categories"
                  item-text="name"
                  item-value="id"
                  label="Category"
                ></v-select>
              </v-col>
              <v-col cols="12" class="my-3">
                  <vue-editor v-model="editedItem.description" />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header v-slot="{ open }">
            <v-row no-gutters>
              <v-col cols="4">Price</v-col>
              <v-col cols="8" class="text--secondary">
                <v-fade-transition leave-absolute></v-fade-transition>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row no-gutters class="d-flex justify-space-around">
              <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                <v-text-field v-model="editedItem.price_pkr" label="Price PKR"></v-text-field>
                <v-text-field v-model="editedItem.price_usd" label="Price USD"></v-text-field>
                <v-text-field v-model="editedItem.price_aud" label="Price AUD"></v-text-field>
                <v-text-field v-model="editedItem.price_eur" label="Price EUR"></v-text-field>
                <v-text-field v-model="editedItem.price_gbp" label="Price GBP"></v-text-field>
              </v-col>
              <v-divider vertical class="mx-4 hidden-xs-only"></v-divider>
              <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                <v-text-field v-model="editedItem.stitched_price_pkr" label="Stitched Price PKR"></v-text-field>
                <v-text-field v-model="editedItem.stitched_price_usd" label="Stitched Price USD"></v-text-field>
                <v-text-field v-model="editedItem.stitched_price_aud" label="Stitched Price AUD"></v-text-field>
                <v-text-field v-model="editedItem.stitched_price_eur" label="Stitched Price EUR"></v-text-field>
                <v-text-field v-model="editedItem.stitched_price_gbp" label="Stitched Price GBP"></v-text-field>
              </v-col>
              <v-divider vertical class="mx-4 hidden-xs-only"></v-divider>
              <v-col cols="12" sm="4" md="4" lg="4" xl="4">
                <v-text-field
                  v-model="editedItem.special_price_percentage"
                  label="Special Price % OFF"
                ></v-text-field>

                <v-menu
                  v-model="menu_special_price_start"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="editedItem.special_price_start"
                      label="Special Price Start"
                      prepend-icon="mdi-calendar-month"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="editedItem.special_price_start"
                    @input="menu_special_price_start = false"
                  ></v-date-picker>
                </v-menu>

                <v-menu
                  v-model="menu_special_price_end"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="editedItem.special_price_end"
                      label="Special Price End"
                      prepend-icon="mdi-calendar-month"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="editedItem.special_price_end"
                    @input="menu_special_price_end = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header v-slot="{ open }">
            <v-row no-gutters>
              <v-col cols="4">Images</v-col>
              <v-col cols="8" class="text--secondary">
                <v-fade-transition leave-absolute></v-fade-transition>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row no-gutters class="d-flex justify-space-around">
              <!-- photo upload -->

              <v-dialog v-model="dialogPhoto1" max-width="300px">
                <template v-slot:activator="{ on }">
                  <v-avatar class="profile" color="grey" size="164" tile v-on="on">
                    <v-img :src="editedItem.image1"></v-img>
                  </v-avatar>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Update Product Image</span>
                  </v-card-title>
                  <v-card-text>
                    <v-col cols="12">
                      <v-file-input
                        v-model="imagesItems.image1"
                        label="Select Photo"
                        placeholder="Upload Image"
                        accept="image/jpg, image/png, image/bmp, image/jpeg"
                        @change="uploadPhoto1()"
                      />
                    </v-col>
                  </v-card-text>
                </v-card>
              </v-dialog>

              <v-dialog v-model="dialogPhoto2" max-width="300px">
                <template v-slot:activator="{ on }">
                  <v-avatar class="profile" color="grey" size="164" tile v-on="on">
                    <v-img :src="editedItem.image2"></v-img>
                  </v-avatar>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Update Product Image</span>
                  </v-card-title>
                  <v-card-text>
                    <v-col cols="12">
                      <v-file-input
                        v-model="imagesItems.image2"
                        label="Select Photo"
                        placeholder="Upload Image"
                        accept="image/jpg, image/png, image/bmp, image/jpeg"
                        @change="uploadPhoto2()"
                      />
                    </v-col>
                  </v-card-text>
                </v-card>
              </v-dialog>

              <v-dialog v-model="dialogPhoto3" max-width="300px">
                <template v-slot:activator="{ on }">
                  <v-avatar class="profile" color="grey" size="164" tile v-on="on">
                    <v-img v-if="editedItem.image3" :src="editedItem.image3"></v-img>
                    <v-img v-else :src="productImg"></v-img>
                  </v-avatar>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Update Product Image</span>
                  </v-card-title>
                  <v-card-text>
                    <v-col cols="12">
                      <v-file-input
                        v-model="imagesItems.image3"
                        label="Select Photo"
                        placeholder="Upload Image"
                        accept="image/jpg, image/png, image/bmp, image/jpeg"
                        @change="uploadPhoto3()"
                      />
                    </v-col>
                  </v-card-text>
                </v-card>
              </v-dialog>

              <v-dialog v-model="dialogPhoto4" max-width="300px">
                <template v-slot:activator="{ on }">
                  <v-avatar class="profile" color="grey" size="164" tile v-on="on">
                    <v-img v-if="editedItem.image4" :src="editedItem.image4"></v-img>
                    <v-img v-else :src="productImg"></v-img>
                  </v-avatar>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Update Product Image</span>
                  </v-card-title>
                  <v-card-text>
                    <v-col cols="12">
                      <v-file-input
                        v-model="imagesItems.image4"
                        label="Select Photo"
                        placeholder="Upload Image"
                        accept="image/jpg, image/png, image/bmp, image/jpeg"
                        @change="uploadPhoto4()"
                      />
                    </v-col>
                  </v-card-text>
                </v-card>
              </v-dialog>

              <v-dialog v-model="dialogPhoto5" max-width="300px">
                <template v-slot:activator="{ on }">
                  <v-avatar class="profile" color="grey" size="164" tile v-on="on">
                    <v-img v-if="editedItem.image5" :src="editedItem.image5"></v-img>
                    <v-img v-else :src="productImg"></v-img>
                  </v-avatar>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Update Product Image</span>
                  </v-card-title>
                  <v-card-text>
                    <v-col cols="12">
                      <v-file-input
                        v-model="imagesItems.image5"
                        label="Select Photo"
                        placeholder="Upload Image"
                        accept="image/jpg, image/png, image/bmp, image/jpeg"
                        @change="uploadPhoto5()"
                      />
                    </v-col>
                  </v-card-text>
                </v-card>
              </v-dialog>

              <v-dialog v-model="dialogPhoto6" max-width="300px">
                <template v-slot:activator="{ on }">
                  <v-avatar class="profile" color="grey" size="164" tile v-on="on">
                    <v-img v-if="editedItem.image6" :src="editedItem.image6"></v-img>
                    <v-img v-else :src="productImg"></v-img>
                  </v-avatar>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Update Product Image</span>
                  </v-card-title>
                  <v-card-text>
                    <v-col cols="12">
                      <v-file-input
                        v-model="imagesItems.image6"
                        label="Select Photo"
                        placeholder="Upload Image"
                        accept="image/jpg, image/png, image/bmp, image/jpeg"
                        @change="uploadPhoto6()"
                      />
                    </v-col>
                  </v-card-text>
                </v-card>
              </v-dialog>

              <!-- photo upload -->
              <!-- <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                <input type="file" @change="uploadImage1" />
                <br />
                <span>Image 600X800</span>
                <v-divider class="my-4 hidden-xs-only"></v-divider>
                <input type="file" @change="uploadImage2" />
                <br />
                <span>Image 600X800</span>
              </v-col>
              <v-divider vertical class="mx-4 hidden-xs-only"></v-divider>
              <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                <input type="file" @change="uploadImage3" />
                <br />
                <span>Image 600X800</span>
                <v-divider class="my-4 hidden-xs-only"></v-divider>
                <input type="file" @change="uploadImage4" />
                <br />
                <span>Image 600X800</span>
              </v-col>-->
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header v-slot="{ open }">
            <v-row no-gutters>
              <v-col cols="4">Attributes</v-col>
              <v-col cols="8" class="text--secondary">
                <v-fade-transition leave-absolute></v-fade-transition>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row no-gutters class="d-flex justify-space-around">
              <v-col cols="12">
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Attribute</th>
                        <th class="text-center">XS</th>
                        <th class="text-center">S</th>
                        <th class="text-center">M</th>
                        <th class="text-center">L</th>
                        <th class="text-center">XL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(size_attrib, k) in editedItem.size_attribs" :key="k">
                        <td scope="row">
                          <v-btn icon @click="deleteRow(k, size_attrib)">
                            <v-icon color="error">mdi-delete</v-icon>
                          </v-btn>
                        </td>
                        <td>
                          <v-select
                            v-model="size_attrib.attributes_id"
                            :items="subattribs"
                            item-text="name"
                            item-value="id"
                            label="Sub"
                          ></v-select>
                        </td>
                        <td>
                          <v-text-field type="number" min="0" step=".01" v-model="size_attrib.xs"></v-text-field>
                        </td>
                        <td>
                          <v-text-field type="number" min="0" step=".01" v-model="size_attrib.s"></v-text-field>
                        </td>
                        <td>
                          <v-text-field type="number" min="0" step=".01" v-model="size_attrib.m"></v-text-field>
                        </td>
                        <td>
                          <v-text-field type="number" min="0" step=".01" v-model="size_attrib.l"></v-text-field>
                        </td>
                        <td>
                          <v-text-field type="number" min="0" step=".01" v-model="size_attrib.xl"></v-text-field>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <v-btn color="secondary" class="mt-2" @click="addNewRow">Add Row</v-btn>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header v-slot="{ open }">
            <v-row no-gutters>
              <v-col cols="4">Additionals</v-col>
              <v-col cols="8" class="text--secondary">
                <v-fade-transition leave-absolute></v-fade-transition>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row no-gutters class="d-flex justify-space-around">
              <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                <v-textarea
                  name="input-7-1"
                  label="Short Description"
                  v-model="editedItem.short_description"
                  hint="Hint text"
                ></v-textarea>
              </v-col>
              <v-divider vertical class="mx-4 hidden-xs-only"></v-divider>
              <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                <v-menu
                  v-model="menu_new_from"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="editedItem.new_from"
                      label="Product New From"
                      prepend-icon="mdi-calendar-month"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="editedItem.new_from" @input="menu_new_from = false"></v-date-picker>
                </v-menu>

                <v-menu
                  v-model="menu_new_to"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="editedItem.new_to"
                      label="Product New To"
                      prepend-icon="mdi-calendar-month"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="editedItem.new_to" @input="menu_new_to = false"></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>

      <div class="float-right">
        <v-btn class="my-5" dark color="primary" @click="submit">Submit</v-btn>
        </div>

    </v-container>
    {{autoFillSize}}
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['auth', 'admin'],
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Products',
    titleTemplate: '%s | Khodgi'
  },
  components: {},

  data: () => ({
    date: null,
    menu_special_price_start: null,
    menu_special_price_end: null,
    menu_new_from: null,
    menu_new_to: null,

    attrib: '',
    attribs: [],
    subattrib: '',
    subattribs: [],

    size_attribs: [
      {
        attribute_set: '',
        attribute: '',
        xs: '',
        s: '',
        m: '',
        l: '',
        xl: ''
      }
    ],

    // demo about
    valid: true,
    dialog: false,
    dialogPhoto1: false,
    dialogPhoto2: false,
    dialogPhoto3: false,
    dialogPhoto4: false,
    dialogPhoto5: false,
    dialogPhoto6: false,
    loading: false,
    snackbar: false,
    text: '',
    product: '',
    success: '',
    error: '',
    categories: [],
    options: {
      sortBy: ['name'],
      sortDesc: [true]
    },
    rules: {
      required: v => !!v || 'This Field is Required',
      min: v => v.length >= 5 || 'Minimum 5 Chracters Required',
      validEmail: v => /.+@.+\..+/.test(v) || 'Email must be valid'
    },
    productImg: window.location.origin + "/storage/images/product_image.png",

    imagesItems: {
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null,
      image6: null
    },

    editedItem: {
      id: '',
      name: '',
      slug: '',
      category_id: '',
      description: '',
      is_active: '',
      price_pkr: '',
      price_usd: '',
      price_aud: '',
      price_eur: '',
      price_gbp: '',
      stitched_price_pkr: '',
      stitched_price_usd: '',
      stitched_price_aud: '',
      stitched_price_eur: '',
      stitched_price_gbp: '',
      special_price_percentage: '',
      special_price_start: '',
      special_price_end: '',
      manage_inventory: '',
      quantity: '',
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null,
      image6: null,
      new_from: '',
      new_to: '',
      short_description: '',
      created_at: '',
      size_attribs: [
        {
          id: '',
          attribute_set: '',
          attributes_id: '',
          xs: '',
          s: '',
          m: '',
          l: '',
          xl: ''
        }
      ]
    },

    size_attribs2: [
        {
          id: '',
          attribute_set: '',
          attributes_id: 1,
          xs: '37',
          s: '37',
          m: '38',
          l: '39',
          xl: '40'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 2,
          xs: '13.5',
          s: '14',
          m: '14.5',
          l: '15',
          xl: '16'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 3,
          xs: '21.5',
          s: '22',
          m: '22.5',
          l: '23',
          xl: '23.5'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 4,
          xs: '10',
          s: '11',
          m: '11.5',
          l: '12',
          xl: '13'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 5,
          xs: '18.5',
          s: '19.5',
          m: '21',
          l: '23',
          xl: '24.5'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 6,
          xs: '17.5',
          s: '18.5',
          m: '19.5',
          l: '21.5',
          xl: '23'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 7,
          xs: '19.5',
          s: '21',
          m: '22.5',
          l: '24',
          xl: '26'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 8,
          xs: '9',
          s: '9',
          m: '10',
          l: '11',
          xl: '11.5'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 9,
          xs: '20',
          s: '21',
          m: '22.5',
          l: '24',
          xl: '26'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 10,
          xs: '6.5',
          s: '6.5',
          m: '7',
          l: '7.5',
          xl: '8'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 11,
          xs: '3',
          s: '3',
          m: '3.5',
          l: '4',
          xl: '4.5'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 12,
          xs: '2.5',
          s: '2.5',
          m: '3',
          l: '3.5',
          xl: '4'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 13,
          xs: '5',
          s: '5',
          m: '5.5',
          l: '6',
          xl: '7'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 14,
          xs: '34',
          s: '34',
          m: '35',
          l: '36',
          xl: '37'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 15,
          xs: '29/25',
          s: '30/27',
          m: '32/30',
          l: '34/33',
          xl: '36/35'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 16,
          xs: '36',
          s: '38',
          m: '44',
          l: '48',
          xl: '52'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 17,
          xs: '21',
          s: '22',
          m: '25',
          l: '27',
          xl: '28'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 18,
          xs: '20',
          s: '20',
          m: '21',
          l: '21',
          xl: '22'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 19,
          xs: '16',
          s: '17',
          m: '19',
          l: '21.5',
          xl: '22'
        },
        {
          id: '',
          attribute_set: '',
          attributes_id: 20,
          xs: '6',
          s: '6',
          m: '6.5',
          l: '7',
          xl: '7.5'
        }
      ]

  }),

//   async asyncData({ $axios, params, error, redirect }) {
//     try {
//       const product = await $axios.get(`/api/admin/products/${params.slug}`)
//       return { product: product.product }
//     } catch (err) {}
//   },

  created() {
    axios
      .get(`/api/admin/products/${this.$route.params.slug}`)
      .then(res => {
     //   console.log(res)
        this.editedItem = res.data.product
      })
      .then(err => {
        console.log(err)
      })

    axios.get('/api/admin/attributes').then(res => {
      this.subattribs = res.data.attributes
    //  console.log(res)
    })

    axios.get('/api/admin/categories').then(res => {
      this.categories = res.data.data
    //  console.log(res)
    })
  },

  methods: {
    uploadPhoto1() {
      const index = this.product.id
      let formData = new FormData()
      formData.append(
        'photo',
        this.imagesItems.image1,
        this.imagesItems.image1.name
      )
      formData.append('product', this.editedItem.id)
      axios
        .post('/api/admin/products/change-photo1', formData)
        .then(res => {
          this.editedItem.image1 = res.data.product.image1
        })
        .catch(err => console.log(err.response))
    },

    uploadPhoto2() {
      const index = this.product.id
      let formData = new FormData()
      formData.append(
        'photo',
        this.imagesItems.image2,
        this.imagesItems.image2.name
      )
      formData.append('product', this.editedItem.id)
      axios
        .post('/api/admin/products/change-photo2', formData)
        .then(res => {
          this.editedItem.image2 = res.data.product.image2
        })
        .catch(err => console.log(err.response))
    },

    uploadPhoto3() {
      const index = this.product.id
      let formData = new FormData()
      formData.append(
        'photo',
        this.imagesItems.image3,
        this.imagesItems.image3.name
      )
      formData.append('product', this.editedItem.id)
      axios
        .post('/api/admin/products/change-photo3', formData)
        .then(res => {
          this.editedItem.image3 = res.data.product.image3
        })
        .catch(err => console.log(err.response))
    },

    uploadPhoto4() {
      const index = this.product.id
      let formData = new FormData()
      formData.append(
        'photo',
        this.imagesItems.image4,
        this.imagesItems.image4.name
      )
      formData.append('product', this.editedItem.id)
      axios
        .post('/api/admin/products/change-photo4', formData)
        .then(res => {
          this.editedItem.image4 = res.data.product.image4
        })
        .catch(err => console.log(err.response))
    },

    uploadPhoto5() {
      const index = this.product.id
      let formData = new FormData()
      formData.append(
        'photo',
        this.imagesItems.image5,
        this.imagesItems.image5.name
      )
      formData.append('product', this.editedItem.id)
      axios
        .post('/api/admin/products/change-photo5', formData)
        .then(res => {
          this.editedItem.image5 = res.data.product.image5
        })
        .catch(err => console.log(err.response))
    },

    uploadPhoto6() {
      const index = this.product.id
      let formData = new FormData()
      formData.append(
        'photo',
        this.imagesItems.image6,
        this.imagesItems.image6.name
      )
      formData.append('product', this.editedItem.id)
      axios
        .post('/api/admin/products/change-photo6', formData)
        .then(res => {
          this.editedItem.image6 = res.data.product.image6
        })
        .catch(err => console.log(err.response))
    },

    deleteRow(index, size_attrib) {
      var idx = this.editedItem.size_attribs.indexOf(size_attrib);
     // console.log(idx, index);
      if (idx > -1) {
        this.editedItem.size_attribs.splice(idx, 1);
      }
    },
    addNewRow() {
      this.editedItem.size_attribs.push({
        attributes_id: "",
        xs: "",
        s: "",
        m: "",
        l: "",
        xl: ""
      });
    },

    submit() {
      axios
          .put(`/api/admin/products/${this.$route.params.slug}`, this.editedItem)
          .then(res => {
        //    console.log(res)
         //   this.editedItem = res.data.product
            this.$router.replace(`/admin/products`)
            this.text = "Record Updated Successfully!";
            this.snackbar = true;
          })
          .catch(err => {
            console.log(err.response);
            this.text = "Error Updating Record";
            this.snackbar = true;
          });
    }
  },

  computed: {
      autoFillSize() {
          if ( !this.editedItem.size_attribs[0]) {
              this.editedItem.size_attribs = this.size_attribs2;
          }
      }
  }

//   mounted() {
//     if (this.product) {
//       Object.keys(this.editedItem).forEach(key => {
//         if (this.product.hasOwnProperty(key)) {
//           this.editedItem[key] = this.product[key]
//         }
//       }),
//         axios.get('/api/admin/attributes').then(res => {
//           this.subattribs = res.data.attributes
//           console.log(res)
//         })

//       axios.get('/api/admin/categories').then(res => {
//         this.categories = res.data.data
//         console.log(res)
//       })
//     }
//   }
}
</script>

<style></style>

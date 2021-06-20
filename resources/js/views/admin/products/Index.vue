<template>
  <v-data-table
    :headers="headers"
    :items="products.data"
    :items-per-page="5"
    class="elevation-1"
    item-key="id"
    :loading="loading"
    @pagination="paginate"
    :options.sync="options"
    :server-items-length="products.total"
    loading-text="Loading.. Please Wait!"
    @input="selectAll"
    :footer-props="{
        itemsPerPageOptions: [5,10,15],
        'show-current-page': true,
        'show-first-last-page': true
    }"
  >
    <template v-slot:top>
      <v-toolbar flat color>
        <v-toolbar-title>Products</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Product</v-btn>
            <!-- <v-btn color="error" dark class="mb-2 mr-2" @click="deleteAll">Delete</v-btn> -->
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-form v-model="valid" method="post" v-on:submit.stop.prevent="save">
              <v-card-text>
                <v-container>
                  <v-row no-gutters class="d-flex justify-space-around">
                    <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                      <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                      <v-select
                        v-model="editedItem.category_id"
                        :items="categories"
                        item-text="name"
                        item-value="id"
                        label="Category"
                      ></v-select>
                      <v-textarea
                        name="input-7-1"
                        label="Short Description"
                        v-model="editedItem.shortDescription"
                        hint="Hint text"
                      ></v-textarea>
                    </v-col>
                    <v-divider vertical class="mx-4 hidden-xs-only"></v-divider>
                    <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                        <v-text-field v-model="editedItem.price_pkr" label="Price PKR"></v-text-field>
                        <v-text-field v-model="editedItem.price_usd" label="Price USD"></v-text-field>
                        <v-text-field v-model="editedItem.price_aud" label="Price AUD"></v-text-field>
                        <v-text-field v-model="editedItem.price_eur" label="Price EUR"></v-text-field>
                        <v-text-field v-model="editedItem.price_gbp" label="Price GBP"></v-text-field>
                    </v-col>
                  </v-row>
                  <!-- <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header v-slot="{ open }">
                        <v-row no-gutters>
                          <v-col cols="4">General</v-col>
                          <v-col cols="8" class="text--secondary">
                            <v-fade-transition leave-absolute>
                            </v-fade-transition>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-row no-gutters class="d-flex justify-space-around">
                          <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                            <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                            <v-select
                              v-model="editedItem.category_id"
                              :items="categories"
                              item-text="name"
                              item-value="id"
                              label="Category"
                            ></v-select>
                          </v-col>
                          <v-divider vertical class="mx-4 hidden-xs-only"></v-divider>
                          <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                            <v-textarea
                              name="input-7-1"
                              label="Short Description"
                              v-model="editedItem.shortDescription"
                              hint="Hint text"
                            ></v-textarea>
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
                          <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                            <v-text-field v-model="editedItem.price_pkr" label="Price PKR"></v-text-field>
                            <v-text-field v-model="editedItem.price_usd" label="Price USD"></v-text-field>
                            <v-text-field v-model="editedItem.price_aud" label="Price AUD"></v-text-field>
                          </v-col>
                          <v-divider vertical class="mx-4 hidden-xs-only"></v-divider>
                          <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                            <v-text-field v-model="editedItem.price_eur" label="Price EUR"></v-text-field>
                            <v-text-field v-model="editedItem.price_gbp" label="Price GBP"></v-text-field>
                          </v-col>
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
                                        v-model="size_attrib.attribute"
                                        :items="subattribs"
                                        item-text="name"
                                        item-value="id"
                                        label="Sub"
                                      ></v-select>
                                    </td>
                                    <td>
                                      <v-text-field
                                        type="number"
                                        min="0"
                                        step=".01"
                                        v-model="size_attrib.xs"
                                      ></v-text-field>
                                    </td>
                                    <td>
                                      <v-text-field
                                        type="number"
                                        min="0"
                                        step=".01"
                                        v-model="size_attrib.s"
                                      ></v-text-field>
                                    </td>
                                    <td>
                                      <v-text-field
                                        type="number"
                                        min="0"
                                        step=".01"
                                        v-model="size_attrib.m"
                                      ></v-text-field>
                                    </td>
                                    <td>
                                      <v-text-field
                                        type="number"
                                        min="0"
                                        step=".01"
                                        v-model="size_attrib.l"
                                      ></v-text-field>
                                    </td>
                                    <td>
                                      <v-text-field
                                        type="number"
                                        min="0"
                                        step=".01"
                                        v-model="size_attrib.xl"
                                      ></v-text-field>
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

                  </v-expansion-panels> -->
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="close">Cancel</v-btn>
                <!-- <v-btn color="blue darken-1" type="submit" :disabled="!valid" @click.prevent="save" text @click="save">Save</v-btn> -->
                <v-btn
                  color="primary"
                  type="submit"
                  :disabled="!valid"
                  @click.prevent="save"
                >Save</v-btn>
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
      <v-icon small class="mr-2" @click="link(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>

    <template v-slot:item.photo="{ item }">
      <v-avatar size="36px">
        <img :src="item.photo" alt="Avatar" />
      </v-avatar>
    </template>

    <template v-slot:item.is_active = "{ item }">
        <v-edit-dialog large block persistent :return-value.sync="item.is_active" @save="updateActiveStatus(item)">

            <v-chip :color="getColor(item.is_active)" dark>
                <span v-if="item.is_active == 1">Active</span>
                <span v-else>InActive</span>
            </v-chip>
            <template v-slot:input>
                <v-select v-model="item.is_active" :items="status" :item-text="status.text" :item-value="status.value" label="Select Status"></v-select>
            </template>
        </v-edit-dialog>
    </template>

    <template v-slot:item.in_stock = "{ item }">
        <v-edit-dialog large block persistent :return-value.sync="item.in_stock" @save="updateStockLevel(item)">

            <v-chip :color="getColor(item.in_stock)" dark>
                <span v-if="item.in_stock == 1">InStock</span>
                <span v-else>Sold out</span>
            </v-chip>
            <template v-slot:input>
                <v-select v-model="item.in_stock" :items="status2" :item-text="status2.text" :item-value="status2.value" label="Select stock level"></v-select>
            </template>
        </v-edit-dialog>
    </template>

    <template v-slot:item.image1="{ item }">
        <v-avatar horizontal size="36px">
          <img :src="item.image1" alt="Avatar" />
        </v-avatar>
    </template>

    <v-snackbar v-model="snackbar">
      {{ text }}
      <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-data-table>
</template>

<script>
// import { VueEditor } from "vue2-editor";
export default {
  layout: 'admin',
    middleware: ['auth', 'admin'],
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Products',
        titleTemplate: '%s | Khodgi'
        },
    components: {
     //   VueEditor
    },

  data: () => ({
    date: null,
    menu_special_price_start: null,
    menu_special_price_end: null,
    menu_new_from: null,
    menu_new_to: null,
    trip: {
      name: "",
      location: null,
      start: null,
      end: null
    },
    locations: [
      "Australia",
      "Barbados",
      "Chile",
      "Denmark",
      "Equador",
      "France"
    ],
    // size_attribs: [
    //   {
    //     attribute_set: "",
    //     attribute: "",
    //     xs: "",
    //     s: "",
    //     m: "",
    //     l: "",
    //     xl: ""
    //   }
    // ],
    attrib: "",
    attribs: [],
    subattrib: "",
    subattribs: [],

    // demo about
    valid: true,
    dialog: false,
    loading: false,
    snackbar: false,
    text: "",
    roles: [],
    success: "",
    error: "",
    categories: [],
    options: {
      sortBy: ["id"],
      sortDesc: [true]
    },
    status: [
          {text: 'Active', value: true},
          {text: 'InActive', value: false}
      ],
    status2: [
          {text: 'InStock', value: true},
          {text: 'Sold Out', value: false}
      ],
    rules: {
      required: v => !!v || "This Field is Required",
      min: v => v.length >= 5 || "Minimum 5 Chracters Required",
      validEmail: v => /.+@.+\..+/.test(v) || "Email must be valid"
    },
    headers: [
      {
        text: "#",
        value: "id"
      },
      { text: "Thumbnail", value: "image1" },
      { text: "Name", value: "name" },
      { text: "Price", value: "price" },
      { text: "Status", value: "is_active" },
      { text: "InStock", value: "in_stock" },
      { text: "Created", value: "created_at" },
      { text: "Actions", value: "action", sortable: false }
    ],
    products: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      name: "",
      category_id: "",
      description: "",
      isActive: "",
      in_stock: "",
      price_pkr: "",
      price_usd: "",
      price_aud: "",
      price_eur: "",
      price_gbp: "",
      special_price_percentage: "",
      special_price_start: "",
      special_price_end: "",
      manage_inventory: "",
      quantity: "",
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      new_from: "",
      new_to: "",
      created_at: "",
      size_attribs: [
        {
          attribute_set: "",
          attribute: "",
          xs: "",
          s: "",
          m: "",
          l: "",
          xl: ""
        }
      ]
    },
    defaultItem: {
      id: "",
      name: "",
      category_id: "",
      description: "",
      isActive: "",
      in_stock: "",
      price_pkr: "",
      price_usd: "",
      price_aud: "",
      price_eur: "",
      price_gbp: "",
      special_price_percentage: "",
      special_price_start: "",
      special_price_end: "",
      manage_inventory: "",
      quantity: "",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      new_from: "",
      new_to: "",
      created_at: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Product" : "Edit Product";
    },
    passwordMatch() {
      return this.editedItem.password != this.editedItem.rpassword
        ? "Password does Not Match"
        : true;
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();

    axios.get("/api/admin/attributes").then(res => {
        this.subattribs = res.data.attributes;
        });

    axios.get("/api/admin/categories").then(res => {
        this.categories = res.data.data;
        });
    },

  methods: {

    updateActiveStatus(item) {
        const index = this.categories.indexOf(item);
        axios.post('/api/admin/products/change-active', {'is_active': item.is_active, 'product': item.id})
          .then(res => {
              this.text = "Products active status updated successfully."
              this.snackbar = true
              })
          .catch(error => {
              this.categories[index].role = error.response
              this.snackbar = true
              console.dir(error.response)
              })
      },

    updateStockLevel(item) {
        const index = this.categories.indexOf(item);
        axios.post('/api/admin/products/change-stock', {'in_stock': item.in_stock, 'product': item.id})
          .then(res => {
              this.text = "Products stock level updated successfully."
              this.snackbar = true
              })
          .catch(error => {
              this.categories[index].role = error.response
              this.snackbar = true
              console.dir(error.response)
              })
      },

    uploadImage1(e) {
        let file = e.target.files[0];
        // console.log(file);
        let reader = new FileReader();
        if (file['size'] < 1000000) {
            reader.onloadend = (file) => {
            //  console.log('RESULT', reader.result)
            this.editedItem.image1 = reader.result;
            }
            reader.readAsDataURL(file);
        } else {
            this.text = 'Image size is greater than 1MB.'
            this.snackbar = true
        }
    },
    uploadImage2(e) {
        let file = e.target.files[0];
        // console.log(file);
        let reader = new FileReader();
        if (file['size'] < 1000000) {
            reader.onloadend = (file) => {
            //  console.log('RESULT', reader.result)
            this.editedItem.image2 = reader.result;
            }
            reader.readAsDataURL(file);
        } else {
            this.text = 'Image size is greater than 1MB.'
            this.snackbar = true
        }
    },
    uploadImage3(e) {
        let file = e.target.files[0];
        // console.log(file);
        let reader = new FileReader();
        if (file['size'] < 1000000) {
            reader.onloadend = (file) => {
            //  console.log('RESULT', reader.result)
            this.editedItem.image3 = reader.result;
            }
            reader.readAsDataURL(file);
        } else {
            this.text = 'Image size is greater than 1MB.'
            this.snackbar = true
        }
    },
    uploadImage4(e) {
        let file = e.target.files[0];
        // console.log(file);
        let reader = new FileReader();
        if (file['size'] < 1000000) {
            reader.onloadend = (file) => {
            //  console.log('RESULT', reader.result)
            this.editedItem.image4 = reader.result;
            }
            reader.readAsDataURL(file);
        } else {
            this.text = 'Image size is greater than 1MB.'
            this.snackbar = true
        }
    },

    uploadPhoto(item) {
      if (this.editedItem.photo != null) {
        const index = this.products.data.indexOf(item);
      //  console.log(this.editedItem);

        let formData = new FormData();
        formData.append(
          "photo",
          this.editedItem.photo,
          this.editedItem.photo.name
        );
        formData.append("user", item.id);
        axios
          .post("/api/admin/change-photo", formData)
          .then(res => {
            this.products.data[index].photo = res.data.data.user.photo;
            this.editedItem.photo = null;
          })
          .catch(err => console.log(err.response));
      }
    },
    updateRole(item) {
      const index = this.products.data.indexOf(item);
      axios
        .post("/api/admin/change-role", { role: item.role, user: item.id })
        .then(res => {
          // this.products.data[index].role = res.data.data.user.role
          this.text =
            res.data.data.user.name + "'s Role Updated to " + res.data.data.user.role;
          this.snackbar = true;
        })
        .catch(error => {
          this.text =
            error.response.data.user.name +
            "'s Role Cannot be Updated" +
            error.response.data.user.role;
          this.products.data[index].role = error.response.data.user.role;
          this.snackbar = true;
          console.dir(error.response);
        });
    },
    checkEmail() {
      if (/.+@.+\..+/.test(this.editedItem.email)) {
        axios
          .post("/api/admin/email/verify", { email: this.editedItem.email })
          .then(res => {
            this.success = res.data.data.message;
            this.error = "";
          })
          .catch(err => {
            (this.success = ""), (this.error = "Email Already Exists");
          });
      }
    },
    selectAll(e) {
      this.selected = [];
      if (e.length > 0) {
        this.selected = e.map(val => val.id);
      }
    //  console.dir(this.selected);
    },
    deleteAll() {
      let decide = confirm("Are you sure you want to delete these items?");
      if (decide) {
        axios
          .post("/api/admin/products/delete", { products: this.selected })
          .then(res => {
            this.text = "Rcords Deleted Successfully!";
            this.selected.map(val => {
              const index = this.products.data.indexOf(val);
              this.products.data.splice(index, 1);
            });
            this.snackbar = true;
          })
          .catch(err => {
            console.log(err.response);
            this.text = "Error Deleting Record";
            this.snackbar = true;
          });
      }
    },
    searchIt(e) {
      if (e.length > 3) {
        axios
          .get(`/api/admin/product-search/${e}`)
          .then(res => (this.products = res.data.products))
          .catch(err => console.dir(err.response));
      }
      if (e.length <= 0) {
        // axios.get(`/api/admin/users?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
        //   axios.get(`/api/admin/users`)
        //     .then(res => this.users = res.data.data.users)
        //     .catch(err => console.dir(err.response))

        // const sortBy =
        //   this.options.sortBy.length == 0 ? "id" : this.options.sortBy[0];
        // const orderBy =
        //   this.options.sortDesc.length > 0 || this.options.sortDesc[0]
        //     ? "desc"
        //     : "asc";
        // axios
        //   .get(`/api/admin/products?page=${e.page}`, {
        //     params: {
        //       per_page: e.itemsPerPage,
        //       sort_by: sortBy,
        //       order_by: orderBy
        //     }
        //   })
        //   .then(res => {
        //     this.products = res.data.data.products;
        //   })
        //   .catch(err => console.dir(err.response));

        this.paginate(e);
      }
    },
    paginate(e) {
      const sortBy =
        this.options.sortBy.length == 0 ? "id" : this.options.sortBy[0];
      const orderBy =
        this.options.sortDesc.length > 0 || this.options.sortDesc[0]
          ? "desc"
          : "asc";
      axios
        .get(`/api/admin/products?page=${e.page}`, {
          params: {
            per_page: e.itemsPerPage,
            sort_by: sortBy,
            order_by: orderBy
          }
        })
        .then(res => {
          this.products = res.data.products;
        //  console.log(res);
        })
        .catch(err => {
          if (err.response.status == 401)
          console.log(err)
        });
    },
    initialize() {
      // Add a request interceptor
      axios.interceptors.request.use(
        config => {
          this.loading = true;
          return config;
        },
        error => {
          this.loading = false;
          return Promise.reject(error);
        }
      );

      // Add a response interceptor
      axios.interceptors.response.use(
        response => {
          this.loading = false;
          return response;
        },
        error => {
          this.loading = false;
          return Promise.reject(error);
        }
      );
    },

    editItem(item) {
      this.editedIndex = this.products.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.products.data.indexOf(item);
      let decide = confirm("Are you sure you want to delete this item?");
      if (decide) {
        axios
          .delete("/api/admin/products/" + item.id)
          .then(res => {
            this.snackbar = true;
            this.products.data.splice(index, 1);
          })
          .catch(err => {
            console.log(err.response);
            this.text = "Error Deleting Record";
            this.snackbar = true;
          });
      }
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        const index = this.editedIndex;
        axios
          .put("/api/admin/products/" + this.editedItem.id, this.editedItem)
          //  .then(res => Object.assign(this.users[this.editedIndex], this.editedItem))
          .then(res => {
            this.text = "Record Updated Successfully!";
            this.snackbar = true;
            Object.assign(this.products.data[index], res.data.data.product);
          })
          .catch(err => {
            console.log(err.response);
            this.text = "Error Updating Record";
            this.snackbar = true;
          });
        //  Object.assign(this.products.data[this.editedIndex], this.editedItem)
      } else {
        axios
          .post("/api/admin/products", this.editedItem)
          .then(res => {
              this.$router.replace(`/admin/products/${res.data.product.slug}`, {
            params: { slug: res.data.product.slug }
          })
          //  this.text = "Record Added Successfully!";
          //  this.snackbar = true;
          //  this.products.data.push(res.data.data.product);
          })
          .catch(err => {
            console.dir(err);
            this.text = "Error Inserting Record";
            this.snackbar = true;
          });
      }
      this.close();
    },

    deleteRow(index, size_attrib) {
      var idx = this.editedItem.size_attribs.indexOf(size_attrib);
    //  console.log(idx, index);
      if (idx > -1) {
        this.editedItem.size_attribs.splice(idx, 1);
      }
    },
    addNewRow() {
      this.editedItem.size_attribs.push({
        attribute: "",
        xs: "",
        s: "",
        m: "",
        l: "",
        xl: ""
      });
    },

    link(item) {
      this.$router.replace(`/admin/products/${item.slug}`)
    },

    getColor (status) {
        if (status == 0) return 'red'
        else return 'green'
      },
  }
};
</script>

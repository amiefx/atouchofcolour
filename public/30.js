(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/products/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/products/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { VueEditor } from "vue2-editor";
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'admin',
  middleware: ['auth', 'admin'],
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Products',
    titleTemplate: '%s | Khodgi'
  },
  components: {//   VueEditor
  },
  data: function data() {
    return {
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
      locations: ["Australia", "Barbados", "Chile", "Denmark", "Equador", "France"],
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
        sortBy: ["name"],
        sortDesc: [true]
      },
      rules: {
        required: function required(v) {
          return !!v || "This Field is Required";
        },
        min: function min(v) {
          return v.length >= 5 || "Minimum 5 Chracters Required";
        },
        validEmail: function validEmail(v) {
          return /.+@.+\..+/.test(v) || "Email must be valid";
        }
      },
      headers: [{
        text: "#",
        value: "id"
      }, {
        text: "Thumbnail",
        value: "image1"
      }, {
        text: "Name",
        value: "name"
      }, {
        text: "Price",
        value: "price"
      }, {
        text: "Status",
        value: "is_active"
      }, {
        text: "Created",
        value: "created_at"
      }, {
        text: "Actions",
        value: "action",
        sortable: false
      }],
      products: [],
      editedIndex: -1,
      editedItem: {
        id: "",
        name: "",
        category_id: "",
        description: "",
        isActive: "",
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
        size_attribs: [{
          attribute_set: "",
          attribute: "",
          xs: "",
          s: "",
          m: "",
          l: "",
          xl: ""
        }]
      },
      defaultItem: {
        id: "",
        name: "",
        category_id: "",
        description: "",
        isActive: "",
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
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "New Product" : "Edit Product";
    },
    passwordMatch: function passwordMatch() {
      return this.editedItem.password != this.editedItem.rpassword ? "Password does Not Match" : true;
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    var _this = this;

    this.initialize();
    axios.get("/api/admin/attributes").then(function (res) {
      _this.subattribs = res.data.attributes;
    });
    axios.get("/api/admin/categories").then(function (res) {
      _this.categories = res.data.data;
    });
  },
  methods: {
    uploadImage1: function uploadImage1(e) {
      var _this2 = this;

      var file = e.target.files[0]; // console.log(file);

      var reader = new FileReader();

      if (file['size'] < 1000000) {
        reader.onloadend = function (file) {
          //  console.log('RESULT', reader.result)
          _this2.editedItem.image1 = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        this.text = 'Image size is greater than 1MB.';
        this.snackbar = true;
      }
    },
    uploadImage2: function uploadImage2(e) {
      var _this3 = this;

      var file = e.target.files[0]; // console.log(file);

      var reader = new FileReader();

      if (file['size'] < 1000000) {
        reader.onloadend = function (file) {
          //  console.log('RESULT', reader.result)
          _this3.editedItem.image2 = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        this.text = 'Image size is greater than 1MB.';
        this.snackbar = true;
      }
    },
    uploadImage3: function uploadImage3(e) {
      var _this4 = this;

      var file = e.target.files[0]; // console.log(file);

      var reader = new FileReader();

      if (file['size'] < 1000000) {
        reader.onloadend = function (file) {
          //  console.log('RESULT', reader.result)
          _this4.editedItem.image3 = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        this.text = 'Image size is greater than 1MB.';
        this.snackbar = true;
      }
    },
    uploadImage4: function uploadImage4(e) {
      var _this5 = this;

      var file = e.target.files[0]; // console.log(file);

      var reader = new FileReader();

      if (file['size'] < 1000000) {
        reader.onloadend = function (file) {
          //  console.log('RESULT', reader.result)
          _this5.editedItem.image4 = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        this.text = 'Image size is greater than 1MB.';
        this.snackbar = true;
      }
    },
    uploadPhoto: function uploadPhoto(item) {
      var _this6 = this;

      if (this.editedItem.photo != null) {
        var index = this.products.data.indexOf(item);
        console.log(this.editedItem);
        var formData = new FormData();
        formData.append("photo", this.editedItem.photo, this.editedItem.photo.name);
        formData.append("user", item.id);
        axios.post("/api/admin/change-photo", formData).then(function (res) {
          _this6.products.data[index].photo = res.data.data.user.photo;
          _this6.editedItem.photo = null;
        })["catch"](function (err) {
          return console.log(err.response);
        });
      }
    },
    updateRole: function updateRole(item) {
      var _this7 = this;

      var index = this.products.data.indexOf(item);
      axios.post("/api/admin/change-role", {
        role: item.role,
        user: item.id
      }).then(function (res) {
        // this.products.data[index].role = res.data.data.user.role
        _this7.text = res.data.data.user.name + "'s Role Updated to " + res.data.data.user.role;
        _this7.snackbar = true;
      })["catch"](function (error) {
        _this7.text = error.response.data.user.name + "'s Role Cannot be Updated" + error.response.data.user.role;
        _this7.products.data[index].role = error.response.data.user.role;
        _this7.snackbar = true;
        console.dir(error.response);
      });
    },
    checkEmail: function checkEmail() {
      var _this8 = this;

      if (/.+@.+\..+/.test(this.editedItem.email)) {
        axios.post("/api/admin/email/verify", {
          email: this.editedItem.email
        }).then(function (res) {
          _this8.success = res.data.data.message;
          _this8.error = "";
        })["catch"](function (err) {
          _this8.success = "", _this8.error = "Email Already Exists";
        });
      }
    },
    selectAll: function selectAll(e) {
      this.selected = [];

      if (e.length > 0) {
        this.selected = e.map(function (val) {
          return val.id;
        });
      }

      console.dir(this.selected);
    },
    deleteAll: function deleteAll() {
      var _this9 = this;

      var decide = confirm("Are you sure you want to delete these items?");

      if (decide) {
        axios.post("/api/admin/products/delete", {
          products: this.selected
        }).then(function (res) {
          _this9.text = "Rcords Deleted Successfully!";

          _this9.selected.map(function (val) {
            var index = _this9.products.data.indexOf(val);

            _this9.products.data.splice(index, 1);
          });

          _this9.snackbar = true;
        })["catch"](function (err) {
          console.log(err.response);
          _this9.text = "Error Deleting Record";
          _this9.snackbar = true;
        });
      }
    },
    searchIt: function searchIt(e) {
      var _this10 = this;

      if (e.length > 3) {
        axios.get("/api/admin/products/".concat(e)).then(function (res) {
          return _this10.products = res.data.data.users;
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }

      if (e.length <= 0) {
        // axios.get(`/api/admin/users?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
        //   axios.get(`/api/admin/users`)
        //     .then(res => this.users = res.data.data.users)
        //     .catch(err => console.dir(err.response))
        var sortBy = this.options.sortBy.length == 0 ? "name" : this.options.sortBy[0];
        var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? "asc" : "desc";
        axios.get("/api/admin/products?page=".concat(e.page), {
          params: {
            per_page: e.itemsPerPage,
            sort_by: sortBy,
            order_by: orderBy
          }
        }).then(function (res) {
          _this10.products = res.data.data.products;
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }
    },
    paginate: function paginate(e) {
      var _this11 = this;

      var sortBy = this.options.sortBy.length == 0 ? "name" : this.options.sortBy[0];
      var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? "asc" : "desc";
      axios.get("/api/admin/products?page=".concat(e.page), {
        params: {
          per_page: e.itemsPerPage,
          sort_by: sortBy,
          order_by: orderBy
        }
      }).then(function (res) {
        _this11.products = res.data.products;
        console.log(res);
      })["catch"](function (err) {
        if (err.response.status == 401) console.log(err);
      });
    },
    initialize: function initialize() {
      var _this12 = this;

      // Add a request interceptor
      axios.interceptors.request.use(function (config) {
        _this12.loading = true;
        return config;
      }, function (error) {
        _this12.loading = false;
        return Promise.reject(error);
      }); // Add a response interceptor

      axios.interceptors.response.use(function (response) {
        _this12.loading = false;
        return response;
      }, function (error) {
        _this12.loading = false;
        return Promise.reject(error);
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.products.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this13 = this;

      var index = this.products.data.indexOf(item);
      var decide = confirm("Are you sure you want to delete this item?");

      if (decide) {
        axios["delete"]("/api/admin/products/" + item.id).then(function (res) {
          _this13.snackbar = true;

          _this13.products.data.splice(index, 1);
        })["catch"](function (err) {
          console.log(err.response);
          _this13.text = "Error Deleting Record";
          _this13.snackbar = true;
        });
      }
    },
    close: function close() {
      var _this14 = this;

      this.dialog = false;
      setTimeout(function () {
        _this14.editedItem = Object.assign({}, _this14.defaultItem);
        _this14.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this15 = this;

      if (this.editedIndex > -1) {
        var index = this.editedIndex;
        axios.put("/api/admin/products/" + this.editedItem.id, this.editedItem) //  .then(res => Object.assign(this.users[this.editedIndex], this.editedItem))
        .then(function (res) {
          _this15.text = "Record Updated Successfully!";
          _this15.snackbar = true;
          Object.assign(_this15.products.data[index], res.data.data.product);
        })["catch"](function (err) {
          console.log(err.response);
          _this15.text = "Error Updating Record";
          _this15.snackbar = true;
        }); //  Object.assign(this.products.data[this.editedIndex], this.editedItem)
      } else {
        axios.post("/api/admin/products", this.editedItem).then(function (res) {
          _this15.$router.replace("/api/admin/products/".concat(res.data.product.slug), {
            params: {
              slug: res.data.product.slug
            }
          }); //  this.text = "Record Added Successfully!";
          //  this.snackbar = true;
          //  this.products.data.push(res.data.data.product);

        })["catch"](function (err) {
          console.dir(err);
          _this15.text = "Error Inserting Record";
          _this15.snackbar = true;
        });
      }

      this.close();
    },
    deleteRow: function deleteRow(index, size_attrib) {
      var idx = this.editedItem.size_attribs.indexOf(size_attrib);
      console.log(idx, index);

      if (idx > -1) {
        this.editedItem.size_attribs.splice(idx, 1);
      }
    },
    addNewRow: function addNewRow() {
      this.editedItem.size_attribs.push({
        attribute: "",
        xs: "",
        s: "",
        m: "",
        l: "",
        xl: ""
      });
    },
    link: function link(item) {
      this.$router.replace("/admin/products/".concat(item.slug));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/products/Index.vue?vue&type=template&id=e03885f4&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/products/Index.vue?vue&type=template&id=e03885f4& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-data-table",
    {
      staticClass: "elevation-1",
      attrs: {
        headers: _vm.headers,
        items: _vm.products.data,
        "items-per-page": 5,
        "item-key": "id",
        loading: _vm.loading,
        options: _vm.options,
        "server-items-length": _vm.products.total,
        "loading-text": "Loading.. Please Wait!",
        "footer-props": {
          itemsPerPageOptions: [5, 10, 15],
          "show-current-page": true,
          "show-first-last-page": true
        }
      },
      on: {
        pagination: _vm.paginate,
        "update:options": function($event) {
          _vm.options = $event
        },
        input: _vm.selectAll
      },
      scopedSlots: _vm._u([
        {
          key: "top",
          fn: function() {
            return [
              _c(
                "v-toolbar",
                { attrs: { flat: "", color: "" } },
                [
                  _c("v-toolbar-title", [_vm._v("Products")]),
                  _vm._v(" "),
                  _c("v-divider", {
                    staticClass: "mx-4",
                    attrs: { inset: "", vertical: "" }
                  }),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-dialog",
                    {
                      attrs: { "max-width": "600px" },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  {
                                    staticClass: "mb-2",
                                    attrs: { color: "primary", dark: "" }
                                  },
                                  on
                                ),
                                [_vm._v("New Product")]
                              )
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.dialog,
                        callback: function($$v) {
                          _vm.dialog = $$v
                        },
                        expression: "dialog"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _c("span", { staticClass: "headline" }, [
                              _vm._v(_vm._s(_vm.formTitle))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-form",
                            {
                              attrs: { method: "post" },
                              on: {
                                submit: function($event) {
                                  $event.stopPropagation()
                                  $event.preventDefault()
                                  return _vm.save($event)
                                }
                              },
                              model: {
                                value: _vm.valid,
                                callback: function($$v) {
                                  _vm.valid = $$v
                                },
                                expression: "valid"
                              }
                            },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        {
                                          staticClass:
                                            "d-flex justify-space-around",
                                          attrs: { "no-gutters": "" }
                                        },
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              attrs: {
                                                cols: "12",
                                                sm: "5",
                                                md: "5",
                                                lg: "5",
                                                xl: "5"
                                              }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: { label: "Name" },
                                                model: {
                                                  value: _vm.editedItem.name,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editedItem,
                                                      "name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "editedItem.name"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-select", {
                                                attrs: {
                                                  items: _vm.categories,
                                                  "item-text": "name",
                                                  "item-value": "id",
                                                  label: "Category"
                                                },
                                                model: {
                                                  value:
                                                    _vm.editedItem.category_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editedItem,
                                                      "category_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "editedItem.category_id"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-textarea", {
                                                attrs: {
                                                  name: "input-7-1",
                                                  label: "Short Description",
                                                  hint: "Hint text"
                                                },
                                                model: {
                                                  value:
                                                    _vm.editedItem
                                                      .shortDescription,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editedItem,
                                                      "shortDescription",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "editedItem.shortDescription"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-divider", {
                                            staticClass: "mx-4 hidden-xs-only",
                                            attrs: { vertical: "" }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              attrs: {
                                                cols: "12",
                                                sm: "5",
                                                md: "5",
                                                lg: "5",
                                                xl: "5"
                                              }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: { label: "Price PKR" },
                                                model: {
                                                  value:
                                                    _vm.editedItem.price_pkr,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editedItem,
                                                      "price_pkr",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "editedItem.price_pkr"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                attrs: { label: "Price USD" },
                                                model: {
                                                  value:
                                                    _vm.editedItem.price_usd,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editedItem,
                                                      "price_usd",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "editedItem.price_usd"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                attrs: { label: "Price AUD" },
                                                model: {
                                                  value:
                                                    _vm.editedItem.price_aud,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editedItem,
                                                      "price_aud",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "editedItem.price_aud"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                attrs: { label: "Price EUR" },
                                                model: {
                                                  value:
                                                    _vm.editedItem.price_eur,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editedItem,
                                                      "price_eur",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "editedItem.price_eur"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                attrs: { label: "Price GBP" },
                                                model: {
                                                  value:
                                                    _vm.editedItem.price_gbp,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editedItem,
                                                      "price_gbp",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "editedItem.price_gbp"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "primary", text: "" },
                                      on: { click: _vm.close }
                                    },
                                    [_vm._v("Cancel")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "primary",
                                        type: "submit",
                                        disabled: !_vm.valid
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.save($event)
                                        }
                                      }
                                    },
                                    [_vm._v("Save")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "mx-4",
                attrs: {
                  "append-icon": "mdi-search",
                  label: "Search",
                  "single-line": "",
                  "hide-details": ""
                },
                on: { input: _vm.searchIt }
              })
            ]
          },
          proxy: true
        },
        {
          key: "item.action",
          fn: function(ref) {
            var item = ref.item
            return [
              _c(
                "v-icon",
                {
                  staticClass: "mr-2",
                  attrs: { small: "" },
                  on: {
                    click: function($event) {
                      return _vm.link(item)
                    }
                  }
                },
                [_vm._v("mdi-pencil")]
              ),
              _vm._v(" "),
              _c(
                "v-icon",
                {
                  attrs: { small: "" },
                  on: {
                    click: function($event) {
                      return _vm.deleteItem(item)
                    }
                  }
                },
                [_vm._v("mdi-delete")]
              )
            ]
          }
        },
        {
          key: "no-data",
          fn: function() {
            return [
              _c(
                "v-btn",
                { attrs: { color: "primary" }, on: { click: _vm.initialize } },
                [_vm._v("Reset")]
              )
            ]
          },
          proxy: true
        },
        {
          key: "item.photo",
          fn: function(ref) {
            var item = ref.item
            return [
              _c("v-avatar", { attrs: { size: "36px" } }, [
                _c("img", { attrs: { src: item.photo, alt: "Avatar" } })
              ])
            ]
          }
        },
        {
          key: "item.role",
          fn: function(ref) {
            var item = ref.item
            return [
              _c(
                "v-edit-dialog",
                {
                  attrs: {
                    large: "",
                    block: "",
                    persistent: "",
                    "return-value": item.role
                  },
                  on: {
                    "update:returnValue": function($event) {
                      return _vm.$set(item, "role", $event)
                    },
                    "update:return-value": function($event) {
                      return _vm.$set(item, "role", $event)
                    },
                    save: function($event) {
                      return _vm.updateRole(item)
                    }
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "input",
                        fn: function() {
                          return [
                            _c("v-select", {
                              attrs: {
                                items: _vm.roles,
                                label: "Select Role",
                                rules: [_vm.rules.required]
                              },
                              model: {
                                value: item.role,
                                callback: function($$v) {
                                  _vm.$set(item, "role", $$v)
                                },
                                expression: "item.role"
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    true
                  )
                },
                [_vm._v("\n      " + _vm._s(item.role) + "\n      ")]
              )
            ]
          }
        },
        {
          key: "item.image1",
          fn: function(ref) {
            var item = ref.item
            return [
              _c("v-avatar", { attrs: { horizontal: "", size: "36px" } }, [
                _c("img", { attrs: { src: item.image1, alt: "Avatar" } })
              ])
            ]
          }
        }
      ])
    },
    [
      _vm._v(" "),
      _vm._v(" "),
      _vm._v(" "),
      _vm._v(" "),
      _vm._v(" "),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n    " + _vm._s(_vm.text) + "\n    "),
          _c(
            "v-btn",
            {
              attrs: { color: "white", text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("Close")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/products/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/admin/products/Index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_e03885f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=e03885f4& */ "./resources/js/views/admin/products/Index.vue?vue&type=template&id=e03885f4&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/products/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_e03885f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_e03885f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/products/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/products/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/products/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/products/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/products/Index.vue?vue&type=template&id=e03885f4&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/products/Index.vue?vue&type=template&id=e03885f4& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_e03885f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=e03885f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/products/Index.vue?vue&type=template&id=e03885f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_e03885f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_e03885f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
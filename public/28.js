(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Users.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'admin',
  middleware: ['auth', 'admin'],
  data: function data() {
    return {
      valid: true,
      dialog: false,
      loading: false,
      snackbar: false,
      text: '',
      roles: [],
      success: '',
      error: '',
      options: {
        sortBy: ['name'],
        sortDesc: [true]
      },
      rules: {
        required: function required(v) {
          return !!v || 'This Field is Required';
        },
        min: function min(v) {
          return v.length >= 5 || 'Minimum 5 Chracters Required';
        },
        validEmail: function validEmail(v) {
          return /.+@.+\..+/.test(v) || 'Email must be valid';
        }
      },
      headers: [{
        text: '#',
        value: 'id'
      }, {
        text: 'Photo',
        value: 'photo'
      }, {
        text: 'Name',
        value: 'name'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Role',
        value: 'role'
      }, {
        text: 'Status',
        value: 'is_active'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }],
      status: [{
        text: 'Active',
        value: true
      }, {
        text: 'In Active',
        value: false
      }],
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
        created_at: ''
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
    passwordMatch: function passwordMatch() {
      return this.editedItem.password != this.editedItem.rpassword ? 'Password does Not Match' : true;
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    uploadPhoto: function uploadPhoto(item) {
      var _this = this;

      if (this.editedItem.photo != null) {
        var index = this.users.data.indexOf(item); // console.log(this.editedItem);

        var formData = new FormData();
        formData.append('photo', this.editedItem.photo, this.editedItem.photo.name);
        formData.append('user', item.id);
        axios.post('/api/change-photo', formData).then(function (res) {
          _this.users.data[index].photo = res.data.user.photo;
          _this.editedItem.photo = null;
        })["catch"](function (err) {
          return console.log(err.response);
        });
      }
    },
    updateRole: function updateRole(item) {
      var _this2 = this;

      var index = this.users.data.indexOf(item);
      axios.post('/api/change-role', {
        'role': item.role,
        'user': item.id
      }).then(function (res) {
        // this.users.data[index].role = res.data.data.user.role
        _this2.text = res.data.user.name + "'s Role Updated to " + res.data.user.role;
        _this2.snackbar = true;
      })["catch"](function (error) {
        // this.text = error.response.data.user.name + "'s Role Cannot be Updated" + error.response.data.user.role
        _this2.users[index].role = error.response.user.role;
        _this2.snackbar = true;
        console.dir(error.response);
      });
    },
    updateStatus: function updateStatus(item) {
      var _this3 = this;

      var index = this.users.data.indexOf(item);
      axios.post('/api/change-status', {
        'status': item.is_active,
        'user': item.id
      }).then(function (res) {
        // this.users.data[index].role = res.data.data.user.role
        _this3.text = res.data.user.name + "'s Status Updated to " + res.data.user.is_active;
        _this3.snackbar = true;
      })["catch"](function (error) {
        // this.text = error.response.user.name + "'s Status Cannot be Updated" + error.response.user.status
        _this3.users.data[index].role = error.response.data.user.role;
        _this3.snackbar = true;
        console.dir(error.response);
      });
    },
    checkEmail: function checkEmail() {
      var _this4 = this;

      if (/.+@.+\..+/.test(this.editedItem.email)) {
        axios.post('/api/email/verify', {
          email: this.editedItem.email
        }).then(function (res) {
          _this4.success = res.data.message;
          _this4.error = '';
        })["catch"](function (err) {
          ;
          _this4.success = '', _this4.error = 'Email Already Exists';
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
      var _this5 = this;

      var decide = confirm('Are you sure you want to delete these items?');

      if (decide) {
        axios.post('/api/users/delete', {
          'users': this.selected
        }).then(function (res) {
          _this5.text = "Rcords Deleted Successfully!";

          _this5.selected.map(function (val) {
            var index = _this5.users.data.indexOf(val);

            _this5.users.data.splice(index, 1);
          });

          _this5.snackbar = true;
        })["catch"](function (err) {
          console.log(err.response);
          _this5.text = "Error Deleting Record";
          _this5.snackbar = true;
        });
      }
    },
    searchIt: function searchIt(e) {
      var _this6 = this;

      if (e.length > 3) {
        axios.get("/api/users/".concat(e)).then(function (res) {
          return _this6.users = res.data.users;
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }

      if (e.length <= 0) {
        // axios.get(`/api/users?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
        //   axios.get(`/api/users`)
        //     .then(res => this.users = res.data.data.users)
        //     .catch(err => console.dir(err.response))
        var sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
        var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
        axios.get("/api/users?page=".concat(e.page), {
          params: {
            'per_page': e.itemsPerPage,
            'sort_by': sortBy,
            'order_by': orderBy
          }
        }).then(function (res) {
          _this6.users = res.data.users;
          _this6.roles = res.data.roles;
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }
    },
    paginate: function paginate(e) {
      var _this7 = this;

      var sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
      var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
      axios.get("/api/users?page=".concat(e.page), {
        params: {
          'per_page': e.itemsPerPage,
          'sort_by': sortBy,
          'order_by': orderBy
        }
      }).then(function (res) {
        _this7.users = res.data.users;
        _this7.roles = res.data.roles;
      })["catch"](function (err) {//----
      });
    },
    initialize: function initialize() {
      var _this8 = this;

      // Add a request interceptor
      axios.interceptors.request.use(function (config) {
        _this8.loading = true;
        return config;
      }, function (error) {
        _this8.loading = false;
        return Promise.reject(error);
      }); // Add a response interceptor

      axios.interceptors.response.use(function (response) {
        _this8.loading = false;
        return response;
      }, function (error) {
        _this8.loading = false;
        return Promise.reject(error);
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.users.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this9 = this;

      var index = this.users.data.indexOf(item);
      var decide = confirm('Are you sure you want to delete this item?');

      if (decide) {
        axios["delete"]('/api/users/' + item.id).then(function (res) {
          _this9.snackbar = true;

          _this9.users.data.splice(index, 1);
        })["catch"](function (err) {
          console.log(err.response);
          _this9.text = "Error Deleting Record";
          _this9.snackbar = true;
        });
      }
    },
    close: function close() {
      var _this10 = this;

      this.dialog = false;
      setTimeout(function () {
        _this10.editedItem = Object.assign({}, _this10.defaultItem);
        _this10.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this11 = this;

      if (this.editedIndex > -1) {
        var index = this.editedIndex;
        axios.put('/api/users/' + this.editedItem.id, this.editedItem) //  .then(res => Object.assign(this.users[this.editedIndex], this.editedItem))
        .then(function (res) {
          _this11.text = "Record Updated Successfully!";
          _this11.snackbar = true;
          Object.assign(_this11.users.data[index], res.data.data.user);
        })["catch"](function (err) {
          console.log(err.response);
          _this11.text = "Error Updating Record";
          _this11.snackbar = true;
        }); //  Object.assign(this.users.data[this.editedIndex], this.editedItem)
      } else {
        axios.post('/api/users', this.editedItem).then(function (res) {
          _this11.text = "Record Added Successfully!";
          _this11.snackbar = true;

          _this11.users.data.push(res.data.user);
        })["catch"](function (err) {
          console.dir(err);
          _this11.text = "Error Inserting Record";
          _this11.snackbar = true;
        });
      }

      this.close();
    },
    getColor: function getColor(status) {
      if (status == 0) return 'red';else return 'green';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.users.data,
          "items-per-page": 5,
          "item-key": "id",
          loading: _vm.loading,
          options: _vm.options,
          "server-items-length": _vm.users.total,
          "loading-text": "Loading.. Please Wait!",
          "show-select": "",
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
                    _c("v-toolbar-title", [_vm._v("user Management")]),
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
                        attrs: { "max-width": "500px" },
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
                                  [_vm._v("New User")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mb-2 mr-2",
                                    attrs: { color: "error", dark: "" },
                                    on: { click: _vm.deleteAll }
                                  },
                                  [_vm._v("Delete")]
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
                                          [
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "12" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "User Name",
                                                    rules: [
                                                      _vm.rules.required,
                                                      _vm.rules.min
                                                    ]
                                                  },
                                                  model: {
                                                    value: _vm.editedItem.name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.name"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _vm.editedIndex == -1
                                                  ? _c("v-text-field", {
                                                      attrs: {
                                                        label: "Email",
                                                        rules: [
                                                          _vm.rules.required,
                                                          _vm.rules.validEmail
                                                        ],
                                                        "success-message":
                                                          _vm.success,
                                                        "error-messages":
                                                          _vm.error
                                                      },
                                                      on: {
                                                        blur: _vm.checkEmail
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem.email,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "email",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.email"
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.editedIndex == -1
                                                  ? _c("v-text-field", {
                                                      attrs: {
                                                        type: "password",
                                                        label: "Password",
                                                        rules: [
                                                          _vm.rules.required
                                                        ]
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .password,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "password",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.password"
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.editedIndex == -1
                                                  ? _c("v-text-field", {
                                                      attrs: {
                                                        type: "password",
                                                        label:
                                                          "ReType Password",
                                                        rules: [
                                                          _vm.rules.required,
                                                          _vm.passwordMatch
                                                        ]
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .rpassword,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "rpassword",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.rpassword"
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c("v-select", {
                                                  attrs: {
                                                    items: _vm.roles,
                                                    label: "Select Role",
                                                    rules: [_vm.rules.required]
                                                  },
                                                  model: {
                                                    value: _vm.editedItem.role,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "role",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.role"
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
                        return _vm.editItem(item)
                      }
                    }
                  },
                  [_vm._v("\n        mdi-pencil\n      ")]
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
                  [_vm._v("\n        mdi-delete\n      ")]
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
                  {
                    attrs: { color: "primary" },
                    on: { click: _vm.initialize }
                  },
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
                _c(
                  "v-edit-dialog",
                  {
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "input",
                          fn: function() {
                            return [
                              _c("v-file-input", {
                                attrs: {
                                  label: "Select Photo",
                                  placeholder: "Upload Avatar",
                                  accept:
                                    "image/jpg, image/png, image/bmp, image/jpeg"
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.uploadPhoto(item)
                                  }
                                },
                                model: {
                                  value: _vm.editedItem.photo,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "photo", $$v)
                                  },
                                  expression: "editedItem.photo"
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
                  [
                    _c("v-avatar", { attrs: { size: "36px" } }, [
                      _c("img", { attrs: { src: item.photo, alt: "Avatar" } })
                    ])
                  ],
                  1
                )
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
                  [
                    _vm._v(
                      "\n            " + _vm._s(item.role) + "\n            "
                    )
                  ]
                )
              ]
            }
          },
          {
            key: "item.is_active",
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
                      "return-value": item.is_active
                    },
                    on: {
                      "update:returnValue": function($event) {
                        return _vm.$set(item, "is_active", $event)
                      },
                      "update:return-value": function($event) {
                        return _vm.$set(item, "is_active", $event)
                      },
                      save: function($event) {
                        return _vm.updateStatus(item)
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
                                  items: _vm.status,
                                  "item-text": _vm.status.text,
                                  "item-value": _vm.status.value,
                                  label: "Select Status"
                                },
                                model: {
                                  value: item.is_active,
                                  callback: function($$v) {
                                    _vm.$set(item, "is_active", $$v)
                                  },
                                  expression: "item.is_active"
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
                  [
                    _c(
                      "v-chip",
                      {
                        attrs: { color: _vm.getColor(item.is_active), dark: "" }
                      },
                      [
                        item.is_active == 1
                          ? _c("span", [_vm._v("Active")])
                          : _c("span", [_vm._v("In Active")])
                      ]
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      }),
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
          _vm._v("\n      " + _vm._s(_vm.text) + "\n      "),
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
            [_vm._v("\n          Close\n      ")]
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

/***/ "./resources/js/views/admin/Users.vue":
/*!********************************************!*\
  !*** ./resources/js/views/admin/Users.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=358a02f9& */ "./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Users.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/admin/Users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=358a02f9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
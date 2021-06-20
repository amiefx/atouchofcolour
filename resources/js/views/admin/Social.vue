<template>
  <div>
    <v-data-table :headers="headers" :items="social" sort-by="id" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Social Media links</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">New Link</v-btn>
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
                      <v-text-field v-model="editedItem.icon" label="Icon"></v-text-field>
                      <v-text-field v-model="editedItem.link" label="Link"></v-text-field>
                      <v-text-field v-model="editedItem.color" label="color"></v-text-field>
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
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>

    </v-data-table>

    <v-snackbar v-model="snackbar">
      Record deleted successfully.
      <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  layout: 'admin',
    middleware: ['auth', 'admin'],
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Size social',
        titleTemplate: '%s | Khodgi'
        },
  data: () => ({
    dialog: false,
    snackbar: false,
    headers: [
      {
        text: "#",
        align: "start",
        sortable: false,
        value: "id"
      },
      { text: "Name", value: "name" },
      { text: "Icon", value: "icon" },
      { text: "Link", value: "link" },
      { text: "Color", value: "color" },
      { text: "Actions", value: "action", sortable: false }
    ],
    social: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      name: "",
      icon: "",
      link: "",
      color: ""
    },
    defaultItem: {
      id: "",
      name: "",
      icon: "",
      link: "",
      color: ""
    },

  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Link" : "Edit Link";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
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

      axios
        .get("/api/admin/social")
        .then(res => {
          this.social = res.data.social;
        })
        .catch(err => {
          console.log(err);
        });

    },

    editItem(item) {
      this.editedIndex = this.social.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.social.indexOf(item);
      let decide = confirm("Are you sure you want to delete this item?");
      if (decide) {
        axios
          .delete("/api/admin/social/" + item.id)
          .then(res => {
            this.snackbar = true;
            this.social.splice(index, 1);
          })
          .catch(err => console.log(err.response));
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
        axios.put("/api/admin/social/" + this.editedItem.id, this.editedItem);
        //   .then(res => Object.assign(this.roles[this.editedIndex], res.data.data.attribute_set))
        //  .catch(err => console.log(err.response))
        Object.assign(this.social[this.editedIndex], this.editedItem);
      } else {
        axios
          .post("/api/admin/social", this.editedItem)
          .then(res => this.social.push(res.data.social))
          .catch(err => console.dir(err.response));
      }
      this.close();
    }
  }
};
</script>

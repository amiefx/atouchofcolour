<template>
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-text-field
                  flat
                  v-model="searchTerm"
                  @input="search"
                  solo
                  rounded
                  outlined
                  dense
                  hide-details
                  prepend-inner-icon="mdi-magnify"
                  label="Search"
                />
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list v-if="searchTerm != ''">
              <v-list-item v-if="results == 0">
                <v-list-item-content>
                  <v-list-item-title>No Result found for '{{searchTerm}}'</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-list
              three-line
              style="max-height: 500px; min-height: 100px;"
              class="overflow-y-auto"
            >
              <template v-for="item in results">
                <v-list-item :key="item.id" :to="`/products/${item.slug}`" @click="menu= false">
                  <v-list-item-avatar horizontal size="100" class="mr-2">
                    <v-img :src="item.image1" contain></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-html="item.name"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.formatted_price"></v-list-item-subtitle>
                    <v-list-item-subtitle v-text="item.short_description"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-divider inset></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-menu>
</template>

<script>
import _ from "lodash";
export default {
    data: ()=> ({
        menu: false,
        results: [],
        searchTerm: "",
    }),

    methods: {

    search: _.debounce(function(e) {
      if (this.searchTerm.length < 3) {
        return;
      }

      axios
        .post("/api/search", { searchTerm: this.searchTerm })
        .then(res => {
          this.results = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });

    }, 300)
  },

  watch: {
    menu() {
      if (this.menu == false) {
        return [(this.searchTerm = ""), (this.results = [])];
      }
    }
  }
}
</script>

<style>

</style>

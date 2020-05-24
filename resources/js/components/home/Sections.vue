<template>
  <div>
    <div class="hidden-xs-only py-10">
          <v-row no-gutters>
            <v-col
              cols="12"
              sm="4"
              md="4"
              lg="4"
              xl="4"
              class="my-3 mx-auto"
              v-for="(item,i) in homeSections"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card class="mx-3" color="grey lighten-4" :to="`/collection/${item.slug}`">
                  <v-img :aspect-ratio="0.75" :src="item.image">
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 black--text"
                        style="height: 18%;"
                      >
                        <v-row>
                          <v-col cols="12">
                            <h3
                              class="title text-uppercase primary--text text-center mt-5"
                            >{{ item.name }}</h3>
                            <h3
                              class="subtitle-1 font-weight-light primary--text text-center mb-8"
                              style="text-decoration: underline;"
                            >Shop Now</h3>
                          </v-col>
                        </v-row>
                      </div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </div>

        <div class="hidden-sm-and-up py-10">
          <v-row no-gutters>
            <v-col
              cols="12"
              sm="4"
              md="4"
              lg="4"
              xl="4"
              class="my-3 mx-auto"
              v-for="(item,i) in homeSections"
              :key="i"
            >
              <v-hover v-slot:default="{  }">
                <v-card
                  class="mx-auto"
                  color="grey lighten-4"
                  max-width="600"
                  :to="`/collection/${item.slug}`"
                >
                  <v-img :aspect-ratio="0.75" :src="item.image">
                    <v-expand-transition>
                      <div
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 black--text"
                        style="height: 18%;"
                      >
                        <v-row>
                          <v-col cols="12">
                            <h3
                              class="title text-uppercase primary--text text-center mt-5"
                            >{{ item.name }}</h3>
                            <h3
                              class="subtitle-1 font-weight-light primary--text text-center mb-8"
                              style="text-decoration: underline;"
                            >Shop Now</h3>
                          </v-col>
                        </v-row>
                      </div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},

  computed: {
    ...mapGetters({
      homeSections: 'home/home_sections'
    })
  },

  created() {
    this.getHomeSection();
  },

  methods: {
    ...mapActions({
      getHomeSection: "home/getHomeSection",
    }),
  }

}
</script>

<style scoped>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.9;
    position: absolute;
    width: 100%;
  }

</style>

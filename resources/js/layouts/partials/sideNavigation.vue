<template>
  <v-list dense>
    <template v-for="item in categories">
      <v-list-group
        v-if="item.children.length > 0"
        :key="item.name"
        v-model="item.model"
        :append-icon="item.model ? 'mdi-chevron-up' : 'mdi-chevron-down'"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="(child, i) in item.children"
          :key="i"
          link
          :to="`/${child.slug}`"
        >
          <v-list-item-action v-if="child.icon">
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ child.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-item
        v-else
        :key="item.name"
        link
        :to="`/${item.slug}`"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      categories: 'categories/categories'
    })
  },

}
</script>

<style></style>

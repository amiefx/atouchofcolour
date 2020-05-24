<template>
    <v-row class="d-flex justify-center">
        <v-menu
            open-on-hover
            bottom
            offset-y
            v-for="item in categories"
            :key="item.slug"
        >
            <template v-slot:activator="{ on }">
                <v-btn text :to="`/collection/${item.slug}`" v-on="on">{{
                    item.name
                }}</v-btn>
            </template>

            <v-list v-if="item.children.length > 0">
                <v-list-item
                    v-for="(child, i) in item.children"
                    :key="i"
                    link
                    :to="`/collection/${child.slug}`"
                >
                    <v-list-item-title>{{ child.name }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {

    computed: {
        ...mapGetters({
            categories: "categories/categories"
        })
    },

    created() {
        this.getCategories();
    },

    methods: {
        ...mapActions({
            getCategories: "categories/getCategories"
        })
    }
};
</script>

<style></style>

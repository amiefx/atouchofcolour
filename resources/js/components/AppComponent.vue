<template>
    <v-app>
        <component :is="layout">
            <router-view />
        </component>
    </v-app>
</template>


<script>
const defaultLayout = 'default'
    export default {
        name: 'App',
        metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'A Touch of Colour',
        // all titles will be injected into this template
        titleTemplate: '%s | Home and Commercial Pinting'
        },
        computed: {
            layout() {
                return (this.$route.meta.layout || defaultLayout) + '-layout'
            }
        },

    }
</script>

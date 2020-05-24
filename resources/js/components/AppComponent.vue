<template>
    <v-app>
        <component :is="layout">
            <router-view />
            <vue-progress-bar></vue-progress-bar>
        </component>
    </v-app>
</template>


<script>
const defaultLayout = 'default'
    export default {
        name: 'App',
        metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Khodgi',
        // all titles will be injected into this template
        titleTemplate: '%s | Online Clothing Store'
        },
        computed: {
            layout() {
                return (this.$route.meta.layout || defaultLayout) + '-layout'
            }
        },


        mounted () {
            //  [App.vue specific] When App.vue is finish loading finish the progress bar
            this.$Progress.finish()
        },
        created () {
            //  [App.vue specific] When App.vue is first loaded start the progress bar
            this.$Progress.start()
            //  hook the progress bar to start before we move router-view
            this.$router.beforeEach((to, from, next) => {
            //  does the page we want to go to have a meta.progress object
            if (to.meta.progress !== undefined) {
                let meta = to.meta.progress
                // parse meta tags
                this.$Progress.parseMeta(meta)
            }
            //  start the progress bar
            this.$Progress.start()
            //  continue to next page
            next()
            })
            //  hook the progress bar to finish after we've finished moving router-view
            this.$router.afterEach((to, from) => {
            //  finish the progress bar
            this.$Progress.finish()
            })
        }

    }
</script>

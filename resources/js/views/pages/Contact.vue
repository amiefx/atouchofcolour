<template>
  <v-container fluid>
    <div class="pb-10 pt-3">
      <v-row class="d-flex justify-center mt-5">
        <h1>CONTACT US</h1>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-row>
    </div>
    <div class="mx-12">
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="px-6 text-center">
            
            <p>
              Phone support is available throughout the day. <br> Feel free to give us a call.
            </p>
            <a href="tel:+61417382263"> <v-icon color="primary">mdi-phone-in-talk-outline</v-icon> +61 417 382 263</a>

            <p class="mt-10">
              For general enquiries and questions, contact us via email
            </p>
            <a href="mailto:atouchofcolour@hotmail.com?Subject=Painting" target="_top"> <v-icon color="primary">mdi-email-outline</v-icon> atouchofcolour@hotmail.com</a>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <Contact />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Contact from '../../components/global/Contact';
export default {
  layout: 'mardom',
  components: {
    Contact
  },

    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Contact Us' ,
        titleTemplate: '%s | Khodgi'
        },

    data: ()=> ({

    })
};
</script>

<style>
a {
  text-decoration: none;
  font-weight: 800;
}
</style>

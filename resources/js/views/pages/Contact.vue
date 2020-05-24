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
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="px-6">
            <p>Phone Number: <strong>+92 00000000</strong></p>
            <p>Whatsapp: <strong>+92 00000000</strong></p>
            <p>Customer Complains: <strong><a href="mailto:complains@khodgi.com?Subject=complain" target="_top">complains@khodgi.com</a></strong></p>
            <p>Order Queries: <strong><a href="customerservices@khodgi.com?Subject=services" target="_top">customerservices@khodgi.com</a></strong></p>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
            <v-text-field class="" label="Name" outlined dense :rules="[rules.required]"></v-text-field>
            <v-text-field class="mt-n3" label="Email" outlined dense :rules="[rules.required]"></v-text-field>
            <v-text-field class="mt-n3" label="Phone" outlined dense :rules="[rules.required]"></v-text-field>
            <v-textarea class="mt-n3" label="Message" outlined dense :rules="[rules.required]"></v-textarea>
            <!-- <v-btn class="float-right mt-n3" type="submit" :disabled="!valid" @click.prevent="save" dark>Submit</v-btn> -->
            <v-btn color="primary" class="float-right mt-n3" dark>Send</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: 'mardom',

    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Contact Us' ,
        titleTemplate: '%s | Khodgi'
        },

    data: ()=> ({
        rules: {
          required: v => !!v || 'This Field is Required',
          min: v => v.length >=5 || 'Minimum 5 Chracters Required',
          validEmail: v => /.+@.+\..+/.test(v) || 'Email must be valid',
      },
    })
};
</script>

<style>
</style>

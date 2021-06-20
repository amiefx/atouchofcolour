<template>
  <v-container>
        <div class="pb-10 pt-3">
            <v-row class="d-flex justify-center mt-5">
            <h1>FAQ's</h1>
            </v-row>
            <v-row class="d-flex justify-center mb-2">
            <v-icon>mdi-dots-horizontal</v-icon>
            </v-row>
        </div>
          <v-row>
            <v-col cols="12" sm="12" md="7" lg="7" xl="7">
      <v-expansion-panels>
        <v-expansion-panel >
          <v-expansion-panel-header v-slot="{ open }" class="hd">
            <v-row no-gutters>
                I am looking for a painter and decorator. What Areas do you cover?
                <v-fade-transition leave-absolute></v-fade-transition>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="bd">
            <v-row no-gutters class="d-flex justify-space-around">
              <v-col cols="12" class="my-3">
                We cover all Victoria and in states are welcome.
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel >
          <v-expansion-panel-header v-slot="{ open }" class="hd">
            <v-row no-gutters>
                What are the different types of services you provide?
                <v-fade-transition leave-absolute></v-fade-transition>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="bd">
            <v-row no-gutters class="d-flex justify-space-around">
              <v-col cols="12" class="my-3">
                Flooring systems and Graffiti systems.
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel >
          <v-expansion-panel-header v-slot="{ open }" class="hd">
            <v-row no-gutters>
                How long have you been in this trade?
                <v-fade-transition leave-absolute></v-fade-transition>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="bd">
            <v-row no-gutters class="d-flex justify-space-around">
              <v-col cols="12" class="my-3">
                We are an established family business with over 30 years of experience. We provide advice and friendly service with pride and are both reliable and honest.
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel >
          <v-expansion-panel-header v-slot="{ open }" class="hd">
            <v-row no-gutters>
                How much do you charge?
                <v-fade-transition leave-absolute></v-fade-transition>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="bd">
            <v-row no-gutters class="d-flex justify-space-around">
              <v-col cols="12" class="my-3">
                For pricing and other information don’t hesitate to call, 0417 382 263.
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel >
          <v-expansion-panel-header v-slot="{ open }" class="hd">
            <v-row no-gutters>
                Are you Insured?
                <v-fade-transition leave-absolute></v-fade-transition>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="bd">
            <v-row no-gutters class="d-flex justify-space-around">
              <v-col cols="12" class="my-3">
                Yes, Public Liability covers for $20M, and we are with Work Cover.
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel >
          <v-expansion-panel-header v-slot="{ open }" class="hd">
            <v-row no-gutters>
                Do you clean up after job is done?
                <v-fade-transition leave-absolute></v-fade-transition>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="bd">
            <v-row no-gutters class="d-flex justify-space-around">
              <v-col cols="12" class="my-3">
                Cleanness is our priority.
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel >
          <v-expansion-panel-header v-slot="{ open }" class="hd">
            <v-row no-gutters>
                Do you cover furniture and carpets whilst working?
                <v-fade-transition leave-absolute></v-fade-transition>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="bd">
            <v-row no-gutters class="d-flex justify-space-around">
              <v-col cols="12" class="my-3">
                We provide covering for all areas.
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>
            </v-col>
            <v-col cols="12" sm="12" md="1" lg="1" xl="1">
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4" xl="4">
              <h3 class="text-center mb-2">Talk to Us Today</h3>
              <Contact />
            </v-col>
          </v-row>
  </v-container>
</template>

<script>
import Contact from '../../components/global/Contact';
export default {
components: {
    Contact
  },

layout: 'mardom',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: "FAQ's" ,
        titleTemplate: '%s | Khodgi'
        },

  data: () => ({
    text: '',
  }),

  created() {
      axios.get('/api/faq')
      .then(res => {
          this.text= res.data.faq
      })
  }

}
</script>

<style lang="scss" scoped>
.hd {
  background-color: #00AEEF;
}
.bd {
  background-color: lightblue;
}
</style>

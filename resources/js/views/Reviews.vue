<template>
  <div>
      <Ratings />
  </div>
</template>

<script>
import Ratings from '../components/global/Ratings';
export default {
  components: {
    Ratings
  },
  metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Reviews' ,
        titleTemplate: '%s | A TOUCH OF COLOUR'
        },
}
</script>

<style>

</style>
<template>
  <div class="gallery content pa-10 text-center">
      <h2 class="work my-5">A Touch of Colour provides a long term maintenance service for Vic Clinic, The
Melbourne Clinic, and The Windsor Private Hospital.</h2>
     <silent-box 
     :gallery="images2"
     autoplay='yes'
     ><!-- your additional content --> </silent-box>
    </div>
</template>

<script>
export default {
    props: {
        images2: {
        required: true,
        type: Array
        }
    },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.gallery {
  display: grid;
  justify-items: center;
}

.silentbox-item {
    max-height: 220px;
    border-radius: .5rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    overflow: hidden;

    img {
      width: 300px;
    }

    img:hover {
        transform: scale(1.2);
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s;
      }
  
}
</style>

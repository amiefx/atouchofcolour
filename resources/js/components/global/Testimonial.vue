<template>
  <div class="testimonial">
      <h1 class="mb-10">Testimonials</h1>
      <carousel
          :perPage="1"
          :scrollPerPage="true"
          :mouse-drag="true"
          :touchDrag="true"
          :navigationEnabled="true"
          :navigation-next-label='`<span style="font-size:80px; color:white;">&rsaquo;</span>`'
          :navigation-prev-label='`<span style="font-size:80px; color:white;">&lsaquo;</span>`'
          :navigationClickTargetSize="15"
          :autoplay="true"
          :paginationEnabled="true"
        >
          <slide v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="testimonial_body">
               <h3 class="mb-5 ts_head">{{testimonial.title}}</h3>
               <p class="ts_body">{{testimonial.body}}</p>
               <p class="my-5 ts_user">{{testimonial.name}}</p>
            </div>
          </slide>
        </carousel>
    </div>
</template>

<script>
export default {
   data: () => {
      return {
          testimonials: {}
      }
    },

    created () {
        axios
            .get('/api/ratings/testimonials')
            .then(res => {
                this.testimonials = res.data.testimonials
            })
            .catch(err => {
                console.log()
            })
    },
}
</script>

<style lang="scss">
.testimonial {
  text-align: center;
  display: grid;
  justify-content: center;
  align-content: center;

  color: white;

  min-height: 100vh;
  background-image: linear-gradient(to right, rgba(0,0,0, .8),  rgba(0,0,0, .8)), url(https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg);
  position: relative;
  opacity: 0.7;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  background-attachment: fixed;
}

.testimonial_body {
  text-align: center;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, max-content );
  grid-gap: 20px;

  .ts_head {
    grid-column: 2 / 5;
    grid-row: 1 / 2;
  }
  .ts_body {
    grid-column: 2 / 5;
    grid-row: 2 / 3;
  }
  .ts_user {
    grid-column: 2 / 5;
    grid-row: 3 / 4;
    font-style: italic;
  }
}
</style>
<template>
  <div class="testimonial">
    <h1 class="mb-10">Testimonials</h1>
    <div class="services">
      <div class="service--1">
        <ul class="list">
          <li>Painting and Decorating</li>
          <li>Interior Design</li>
          <li>Property Maintenance</li>
          <li>Commercial and Residential</li>
          <li>Professional Cleaning</li>
        </ul>
      </div>
      <div class="service--2">
        <ul class="list">
          <li>Over 30 Years of experience</li>
          <li>High Standards of Workmanship</li>
          <li>Customer care is our focus point</li>
          <li>1 year guarantee on all services</li>
        </ul>
      </div>
      <div class="service--3">

        <ul class="list">
          <li>Over 30 Years of experience</li>
          <li>High Standards of Workmanship</li>
          <li>Customer care is our focus point</li>
          <li>1 year guarantee on all services</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      
    };
  },

};
</script>

<style lang="scss">
.testimonial {
  text-align: center;
  display: grid;
  justify-content: center;
  align-content: center;

  color: white;

  min-height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url(https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg);
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
  grid-template-rows: repeat(3, max-content);
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
<template>
  <div class="ratings" id="reviews">
      <div class="summary">
          <div class="star">
               <div class="s1">{{ratingsFormated}}</div>
               <div class="s2">Out of <br> 5 Stars</div>
               <div class="s3">
                   <v-rating
                      v-model="stars"
                      background-color="#E5C063"
                      color="#E5C063"
                      dense
                      readonly
                      x-large
                      half-increments
                      class="hidden-sm-and-down"
                    ></v-rating>
                    <v-rating
                      v-model="stars"
                      background-color="#E5C063"
                      color="#E5C063"
                      dense
                      readonly
                      half-increments
                      class="hidden-md-and-up"
                    ></v-rating>
               </div>
               <div class="charts">
                 <table>
                     <tbody>
                         <tr>
                             <td class="st1">5 Stars</td>
                             <td class="st2">
                                 <div :style="{width: stars5Percentage + '%'}" class="bar" style="background-color: goldenrod; z-index: 90;">&nbsp;</div>
                             </td>
                             <td class="st3 pl-2">{{stars5}}</td>
                         </tr>
                         <tr>
                             <td class="st1">4 Stars</td>
                             <td class="st2">
                                 <div :style="{width: stars4Percentage + '%'}" class="bar" style="background-color: goldenrod; z-index: 90;">&nbsp;</div>
                             </td>
                             <td class="st3 pl-2">{{stars4}}</td>
                         </tr>
                         <tr>
                             <td class="st1">3 Stars</td>
                             <td class="st2">
                                 <div :style="{width: stars3Percentage + '%'}" class="bar" style="background-color: goldenrod; z-index: 90;">&nbsp;</div>
                             </td>
                             <td class="st3 pl-2">{{stars3}}</td>
                         </tr>
                         <tr>
                             <td class="st1">2 Stars</td>
                             <td class="st2">
                                 <div :style="{width: stars2Percentage + '%'}" class="bar" style="background-color: goldenrod; z-index: 90;">&nbsp;</div>
                             <td class="st3 pl-2">{{stars2}}</td>
                         </tr>
                         <tr>
                             <td class="st1">1 Star</td>
                             <td class="st2">
                                 <div :style="{width: star1Percentage + '%'}" class="bar" style="background-color: goldenrod; z-index: 90;">&nbsp;</div>
                             </td>
                             <td class="st3 pl-2">{{star1}}</td>
                         </tr>
                     </tbody>
                 </table>
               </div>
          </div>
          <div class="description">
                <p>
                  Read our reviews showcasing our customer's experience with our company, outlining our commitment to service and a happy customer. We are dedicated to customer feedback and reviews to listen to our customers and provide the best service possible.
                </p>
                <p class="mb-5">
                    We appreciate our customers taking the time to share their experiences and look forward to working with you.
                </p>
                <v-btn dark color="primary float-right" to="/feedback">Leave us feedback</v-btn>
          </div>
      </div>
      <div class="reviews">
             <v-card v-for="review in reviews.data" :key="review.id" class="review ma-3">
                 <v-card-title>
                    <v-rating
                      v-model="review.rating"
                      background-color="#E5C063"
                      color="#E5C063"
                      dense
                      readonly
                      half-increments
                    ></v-rating>
                 </v-card-title>
                 <v-card-subtitle>
                    {{review.name}}
                 </v-card-subtitle>
                 <v-card-text>
                     {{review.body}}
                 </v-card-text>
             </v-card>
          </div>

          <div class="control">
                 <v-btn dark color="primary" class="mx-2" @click="fetchReviews(pagination.prev_page_url)" :disabled="!pagination.prev_page_url">
                     <v-icon>mdi-chevron-left</v-icon> Previous
            </v-btn>
                <v-btn dark color="primary"  class="mx-2" @click="fetchReviews(pagination.next_page_url)" :disabled="!pagination.next_page_url">
                   Next <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
             </div>
  </div>
</template>

<script>
export default {
    data: () => {
      return {
          stars: '',
          total_review:'',
          stars5: '',
          stars4: '',
          stars3: '',
          stars2: '',
          star1: '',
          reviews: {},
          pagination: {}
      }
    },

    methods: {
        fetchReviews(pagei) {
         pagei = pagei || '/api/ratings/all';
      axios
        .get(pagei)
        .then(res => {
          this.reviews = res.data.reviews
          this.pagination = {
             path: res.data.reviews.path+"?page=",
             prev_page_url: res.data.reviews.prev_page_url,
             next_page_url: res.data.reviews.next_page_url,
             current_page : res.data.reviews.current_page,
          }

        })
        .catch(err => {
          console.log();
        });
    },

    },

    created () {
        this.fetchReviews();

        axios
            .get('/api/ratings/all')
            .then(res => {
                this.stars = res.data.stars
                this.total_review = res.data.total_review
                this.stars5 = res.data.stars5
                this.stars4 = res.data.stars4
                this.stars3 = res.data.stars3
                this.stars2 = res.data.stars2
                this.star1 = res.data.star1
            })
            .catch(err => {
                console.log()
            })
    },

    computed: {
        stars5Percentage() {
            return (this.stars5 / this.total_review) * 100
        },
        stars4Percentage() {
            return (this.stars4 / this.total_review) * 100
        },
        stars3Percentage() {
            return (this.stars3 / this.total_review) * 100
        },
        stars2Percentage() {
            return (this.stars2 / this.total_review) * 100
        },
        star1Percentage() {
            return (this.star1 / this.total_review) * 100
        },
        ratingsFormated() {
            return parseFloat(this.stars).toFixed(1);
        }
    }
}
</script>

<style lang="scss" scoped>
$bp-medium: 50em; // 800px
.ratings {
  position: relative;
  opacity: 0.7;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  background-attachment: fixed;
}

.ratings {
  min-height: 100vh;
  background-image: linear-gradient(to right, rgba(0,0,0, .8),  rgba(0,0,0, .8)), url('http://localhost:8000/storage/images/home8.jpg');

  
  align-items: center;
  padding: 2.5rem;
}

.summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
    align-items: start;

    padding: 5rem;
    color: white;

    @media only screen and (max-width: $bp-medium) {
        grid-template-rows: repeat(2, max-content) !important;
        grid-template-columns: 1fr !important;
        grid-auto-flow: row;
        grid-gap: 2.5rem;
        padding: 0.5rem;
    }

    .star {
        grid-column: 1 / 2;

        display: grid;
        grid-template-rows: repeat(2, max-content);
        grid-template-columns: repeat(3, max-content);
        align-items: center;
        grid-gap: 10px;
        grid-auto-flow: column;

        .s1 {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            font-weight: 800;
            font-size: 3rem;
            font-style: bold;

            justify-self: end;

            @media only screen and (max-width: $bp-medium) {
                font-weight: 400;
                font-size: 2rem;
            }

        }
        .s2 {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
            justify-self: start;
        }

        .s3 {
            grid-column: 3 / 4;
            grid-row: 1 / 2;
        }

        .charts {
            grid-row: 2 / 3;
            grid-column: 1 / 4;

            .st1 {
                width: 60px;
            }
            .st2{
                width: 78%;
                background-color: #eee;
                @media only screen and (max-width: $bp-medium) {
                  width: 70%;
                }
            }
            .st3 {

            }
        }
    }
    .description {
        grid-column: 2 / 4;
        @media only screen and (max-width: $bp-medium) {
        grid-column: 1 / 4;
        grid-row: 2 / 3;
    }
    }
}

.reviews {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-gap: 15px;

        padding: 0 5rem;

        @media only screen and (max-width: $bp-medium) {
        padding: 2.5rem 0;
       .review {
           max-width: 80vw;
        } 
    }

        
    }

    .control {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        padding: 20px 60px;

        @media only screen and (max-width: $bp-medium) {
           padding: 10px 30px;
        }
    }
</style>
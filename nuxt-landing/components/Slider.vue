<template>
  <div class="slider" align-v="center">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="5000"
          controls
          indicators
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Slides with custom text -->
          <b-carousel-slide img-src="slide1.png">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <h1>Design &#38; Branding</h1>
                <p>We Deliver Quality Results</p>
              </div>
            </div>
          </b-carousel-slide>

          <b-carousel-slide img-src="slide2.png">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <h1>Design &#38; Branding</h1>
                <p>We Deliver Quality Results</p>
              </div>
            </div>
          </b-carousel-slide>

        </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style lang="sass">
#carousel-1
  h1
    font-family: Roboto, sans-serif
    color: white
    text-transform: uppercase
    font-size: 48px
    background: black
  p
    letter-spacing: 5px
    font-family: Roboto, sans-serif
    padding-top: 35px
    color: black
    text-transform: uppercase
    font-size: 18px
.carousel-caption
  bottom: 150px
.slider
  padding-bottom: 35px
</style>

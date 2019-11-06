<template>
    <div class="container">
      <div class="row">
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
            <div class="slider-title ">
              <h1>Design &#38; Branding</h1>
            </div>

            <p>We Deliver Quality Results</p>
          </b-carousel-slide>

          <b-carousel-slide img-src="slide2.png">
            <div class="slider-title ">
              <h1>Design &#38; Branding</h1>
            </div>

            <p>We Deliver Quality Results</p>
          </b-carousel-slide>

        </b-carousel>
      </div>
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
    color: white
    text-transform: uppercase
    font-size: 48px
  p
    padding-top: 35px
    color: black
    text-transform: uppercase
    font-size: 18px
.slider-title
  background: black
.carousel-caption
  bottom: 115px

</style>

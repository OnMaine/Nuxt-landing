<template>
  <div class="about d-flex align-items-center">
    <div class="container">
      <div class="row">
      <div class="col-lg-6 about-text">
        <h1>About The Agency</h1>
        <p>Welcome to Lian</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.about
  background-image: url("~static/base.png")
  background-size: cover
  background-position: 95% 100%
  font-family: Roboto, sans-serif
  text-transform: uppercase
  h1
    font-size: 48px
    color: white
    background: black
    text-align: center
    margin: 115px 0 45px 0
    letter-spacing: 5px
    font-weight: lighter
  p
    font-size: 18px
    color: black
    text-align: left
    padding-bottom: 120px
    letter-spacing: 10px
</style>

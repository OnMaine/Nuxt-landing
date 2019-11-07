<template lang="html">
<div class="footer">
    <div class="footer-logo">
      <div class="col-lg-12">
        <a class="navbar-brand" href="#">
          <img src="~/static/logo.png" alt="logo">
        </a>
      </div>
    </div>
    <div class=" media-icon-box">
      <div class="col-lg-12 d-flex justify-content-center">
        <div class="media-icon">
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
        <div class="media-icon">
          <a href="#">
            <i class="fab fa-google-plus-g"></i>
          </a>
        </div>
        <div class="media-icon">
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
        <div class="media-icon">
          <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div class="media-icon">
          <a href="#">
            <i class="fab fa-renren"></i>
          </a>
        </div>
        <div class="media-icon">
          <a href="#">
            <i class="fab fa-pinterest-p"></i>
          </a>
        </div>
        <div class="media-icon">
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-text">
      <h1> &copy; 2016 <span class="text-dark">Mulitix Theme</span> by ThemeForces. All Rights Reserved.</h1>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
.footer
  padding-top: 65px
.media-icon-box
  border-top: 2px solid #ebebeb
  border-bottom: 2px solid #ebebeb
.media-icon
  padding: 25px 30px 25px 30px
  a
    color: #777777
  a:hover
    color: black
    text-decoration: none
.footer-logo
  text-align: center
.footer-text
  padding: 35px 0 35px 0
  h1
    color: #aaaaaa
    text-align: center
    font-family: Roboto, sans-serif
    text-transform: uppercase
    font-size: 14px
.text-dark
  color: black
</style>

<template>
    <div class="container">
      <div class="row d-flex justify-content-between">
        <div class="col-lg-2">
          <a class="navbar-brand" href="#">
            <img src="~/static/logo.png" alt="logo">
          </a>
        </div>
        <div class="col-lg-6 ml-auto align-self-center">
          <nav class="navbar navbar-expand-lg">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <nuxt-link exact active-class="active" class="nav-link" to="/">
                  Home
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link active-class="active" class="nav-link" to="/about">
                  About
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link active-class="active" class="nav-link" to="/link">
                  Portfolio
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link active-class="active" class="nav-link" to="/users">
                  Blog
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link active-class="active" class="nav-link" to="/login">
                  Contact
                </nuxt-link>
              </li>
              <li class="nav-item align-self-center">
                <i class="fas fa-search serch-icon"></i>
              </li>
              <!--
              <li class="nav-item">
                <nuxt-link active-class="active" class="nav-link" to="/login">
                  Login
                </nuxt-link>
              </li>
            -->
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}

</script>

<style lang="sass">
.navbar-brand
  padding: 20px 0 30px
  img
    width: 130px
    height: 35px


%message-shared
  padding: 0 12px 0 12px
  color: #d2d2d2
  font-size: 14px
  font-weight: bold

.nav-item
  @extend %message-shared
  font-family: Roboto, sans-serif
  a
    @extend %message-shared
  a:hover
    color: black

.serch-icon
  @extend %message-shared
  &:hover
    color: black

</style>

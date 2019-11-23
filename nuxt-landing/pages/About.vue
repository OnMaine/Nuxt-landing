<template>
  <div class="container">
    <div class="row our d-flex justify-content-between">
      <div class="col-lg-6 d-flex justify-content-center">
        <img src="~static/our.png">
      </div>
      <div class="col-lg-6">
        <div class="our-story">
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
          <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
        </div>
        <div class="our-skills">
            <h2>Our Skills</h2>
            <h3>Photoshop</h3>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
            <h3>Branding</h3>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 95%;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
            </div>
            <h3>Photography</h3>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
            <h3>Web Design</h3>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
            </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center about-text">
    <div class="col-lg-6">
      <h1>Awesome Team</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
      </div>
    </div>
    <div class="row team d-flex justify-content-between">
        <div class="col-lg-4 card">
        <img src="~static/team1.png" class="card-img-top">
        <div class="card-body">
          <h2>Lian Joy</h2>
          <h3>CEO/Founder</h3>
          <p>Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit, sed diam nonu mmy nibh euis mod tinci</p>
        </div>
      </div>
      <div class="col-lg-4 card">
        <img src="~static/team2.png" class="card-img-top">
        <div class="card-body">
        <h2>Albert Thanh </h2>
        <h3>CEO/Founder</h3>
        <p>Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit, sed diam nonu mmy nibh euis mod tinci </p>
        </div>
      </div>
      <div class="col-lg-4 card">
        <img src="~static/team3.png" class="card-img-top">
        <div class="card-body">
        <h2>Jenn Pereira</h2>
        <h3>CEO/Founder</h3>
        <p>Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit, sed diam nonu mmy nibh euis mod tinci </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'above'
}
</script>

<style lang="sass">
%message-shared
  font-size: 18px
  font-family: Roboto, sans-serif
  text-transform: uppercase
  color: black
  letter-spacing: 5px
.our
  padding: 75px 0 100px 0
.team
  padding-bottom: 75px
.our-story
  h2
    @extend %message-shared
    padding-bottom: 20px
  p
    font-size: 14px
    font-family: Roboto, sans-serif
    padding-bottom: 25px
    color: #777777
.our-skills
  h2
    @extend %message-shared
  h3
    font-weight: bold
    font-size: 16px
    font-family: Roboto, sans-serif
    padding: 20px 0 20px 0
.progress
  height: 10px

.about-text
  text-align: center
  padding-bottom: 75px
  h1
    font-size: 30px
    font-family: Roboto, sans-serif
    text-transform: uppercase
    font-weight: lighter
    padding-bottom: 35px
  p
    font-size: 14px
    font-family: Roboto, sans-serif
.card
  border: none
  background: #fafafa
.card-body
  background: white
  padding: 35px 40px 30px 35px
  h2
    font-size: 24px
    font-family: Roboto, sans-serif
    text-transform: uppercase
    font-weight: lighter
  h3
    font-size: 16px
    font-family: Roboto, sans-serif
    font-weight: bold
    padding-bottom: 10px
  p
    font-size: 14px
    font-family: Roboto, sans-serif
    color: #777777
</style>

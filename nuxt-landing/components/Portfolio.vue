<template>
  <div id="app">
    <div class="title-container">
      <div>
        <h3 class="title">
          Our Projects
        </h3>
      </div>
      <div class="filters">
        <span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">ALL</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'LOGO' }" v-on:click="setFilter('LOGO')">LOGO</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'MOBILE APP' }" v-on:click="setFilter('MOBILE APP')">MOBILE APP</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'WORDPRESS' }" v-on:click="setFilter('WORDPRESS')">WORDPRESS</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'UI/IX' }" v-on:click="setFilter('UI/IX')">UI/IX</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'BRANDING' }" v-on:click="setFilter('BRANDING')">BRANDING</span>
      </div>
    </div>

    <transition-group class="projects" name="projects" tag="div" >
      <div class="project" v-if="currentFilter === project.category || currentFilter === 'ALL'" v-bind:key="project.title" v-for="project in projects">
        <div class="project-image-wrapper">
          <img class="project-image" v-bind:src="project.image">
        </div>
      </div>
    </transition-group>
    <div class="more d-flex justify-content-center">
      <button type="button">Load More</button>
    </div>
  </div>
</template>

<script>
export default {
	data(){
    return{
		currentFilter: 'ALL',
		projects: [
      {title: "1", image: "item7.png", category: 'LOGO'},
      {title: "2", image: "item10.png", category: 'BRANDING'},
      {title: "3", image: "item3.png", category: 'LOGO'},
      {title: "4", image: "item4.png", category: 'UI/IX'},
      {title: "5", image: "item5.png", category: 'WORDPRESS'},
      {title: "6", image: "item6.png", category: 'MOBILE APP'},
      {title: "7", image: "item1.png", category: 'UI/IX'},
      {title: "8", image: "item8.png", category: 'MOBILE APP'},
      {title: "9", image: "item9.png", category: 'WORDPRESS'},
		],
    }
	},
	methods: {
		setFilter: function(filter) {
			this.currentFilter = filter;
		}
	}
}
</script>

<style lang="sass">
#app
  padding: 35px 0 70px 0
  background: #fafafa

.title-container
	display: flex
	flex-direction: column
  justify-content: center
	align-items: center

.title
	font-size: 30pt
	font-weight: normal

.project-title
  font-size: 16pt

.filter
	font-family: arial
	padding: 6px 6px
	cursor: pointer
	border-radius: 6px
	transition: all 0.35s

.filter.active
	box-shadow: 0px 1px 3px 0px #00000026

.filter:hover
	background: lightgray

.projects
	margin-bottom: 50px
	margin-top: 25px
	display: flex
	flex-wrap: wrap
	justify-content: center
  align-items: center

.projects-enter
	transform: scale(0.5) translatey(-80px)
	opacity: 0

.projects-leave-to
	transform: translatey(30px)
	opacity: 0

.projects-leave-active
	position: absolute
	z-index: -1

.project
	transition: all .35s ease-in-out
	margin: 10px
	box-shadow: 0px 2px 8px lightgrey
	border-radius: 3px
	display: flex
	flex-direction: column
	align-items: center

.project-image-wrapper
	position: relative

.project-image
	border-bottom-left-radius: 5px
	border-bottom-right-radius: 5px
	border-top-left-radius: 3px
	border-top-right-radius: 3px

.more
  button
    font-size: 13px
    color: white
    background-color: #959595
    border: 1px solid
    border-radius: 5px
    text-transform: uppercase
    padding: 10px 25px 10px 25px
    font-family: Roboto, sans-serif
    cursor: pointer
    outline: none
    &:hover
      background: transparent
      border: 1px solid #959595
      border-radius: 5px
      color: #959595
      font-weight: bold
      transition: 0.5s
</style>

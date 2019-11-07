<template>
  <div>
    <Navbar/>
    <Slider/>
    <Portfolio/>
    <main>
      <div class="container">
          <nuxt/>
      </div>
    </main>
    <Basemant/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import Portfolio from '@/components/Portfolio'
import Basemant from '@/components/Basemant'
export default {
  components: {
    Navbar,
    Slider,
    Portfolio,
    Basemant
  }
}
</script>

<style>

</style>

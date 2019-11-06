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

    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import Portfolio from '@/components/Portfolio'
export default {
  components: {
    Navbar,
    Slider,
    Portfolio
  }
}
</script>

<style>

</style>

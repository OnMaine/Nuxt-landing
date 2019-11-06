<template>
  <div>
    <Navbar/>
    <Slider/>
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
export default {
  components: {
    Navbar,
    Slider
  }
}
</script>

<style>

</style>

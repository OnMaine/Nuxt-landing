<template>
  <div>
    <Navbar/>
    <Welcome/>
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
import Welcome from '@/components/Welcome'
import Basemant from '@/components/Basemant'
export default {
  components: {
    Navbar,
    Welcome,
    Basemant
  }
}
</script>

<style lang="sass">

</style>

<template>
  <div>
    <Navbar/>
    <Welcome/>
    <main>
      <section class="main-section">
          <nuxt/>
      </section>
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
.main-section
  background-color: #fafafa
</style>

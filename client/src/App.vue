<template>
  <div id="root" class="container">
    <div class="grid-container-nav">
      <Logo />
      <Navbar />
      <div class="empty"></div>
      <div class="color-mode">
        <span 
        @click="colorMode=!colorMode" 
        v-if="colorMode == true" 
        class="material-icons dark"
          >dark_mode</span>
        <span 
        @click="colorMode=!colorMode" 
        v-if="colorMode == false" 
        class="material-icons light"
        >light_mode</span>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import './assets/styles/style.scss'
import Navbar from './components/Navbar.vue'
import Logo from '../src/components/base/Logo.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Logo,
  },
  data() {
    var colorMode = true
    return {
      colorMode
    },
  }
}
</script>

<style scoped>
</style>
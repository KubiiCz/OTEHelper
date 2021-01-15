<template>
  <div id="root" class="container">
    <div class="grid-container-nav">
      <Logo />
      <Navbar />
      <div class="empty"></div>
      <div class="color-mode">
        <span 
        v-on:click="changeColorMode" class="material-icons">{{materialIcon}}</span>
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
    var materialIcon = 'light_mode'
    return {
      colorMode,
      materialIcon
    }
  },
  methods:{
    changeColorMode(){
      if (this.materialIcon === 'light_mode') {
        this.materialIcon = 'dark_mode'
        document.body.classList.remove('light_mode')
        document.body.classList.add(this.materialIcon)
      } else {
        this.materialIcon = 'light_mode'
        document.body.classList.remove('dark_mode')
        document.body.classList.add(this.materialIcon)
      }
    }
  }
}
</script>

<style scoped>
</style>
<template>
  <img alt="Vu.e logo" src="./assets/logo.png" />
  <HelloWorld v-bind:message="message" v-bind:request="request"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    var message = "Hello Vue 3.0 + Vite"
    var request = "Request from API"
    return {
      request
    }
  },
  methods: {

  },
  mounted(){
    console.log('Component mounted')
    var response = axios.get('http://localhost:5000/user/69').then((response) => {
        console.log(response.data)
        this.request = response.data.message
    })
  }
}
</script>
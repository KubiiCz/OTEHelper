<template>
<MessageComp v-bind:request="request"/>
</template>

<script>
import MessageComp from '../components/MessageComp.vue'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        MessageComp,
        },
    data(){
        var request = "Request from API"
        return {
        request
        }
    },
    mounted(){
        console.log('Component mounted')
        var response = axios.get('http://localhost:5000/users').then((response) => {
            console.log(response.data)
            this.request = response.data.message
        })
    }
}
</script>

<style lang="scss" scoped>

</style>


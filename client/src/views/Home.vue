<template>
    <div class="grid-container-content home">
        <Files />
        <UploadForm />
        <TextBox :heading="heading"/>
        <Preview />
    </div>
</template>

<script>
import Files from '../components/Files.vue'
import Help from '../components/Help.vue'
import Preview from '../components/Preview.vue'
import UploadForm from '../components/UploadForm.vue'
import TextBox from '../components/TextBox.vue'

import axios from 'axios'

export default {
    name: 'Home',
    components: {
        Preview,
        Files,
        Help,
        TextBox,
        UploadForm,
        },
    data(){
        var request = "Request from API"
        var heading = "Custom text"
        return {
        request,
        heading
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


<template>
    <div class="files component-wrapper">
        <h3>Zdrojové soubory...</h3>
        <a href="#" v-on:click="getCSV()">.csv</a>
        <a href="#" v-on:click="getXML()">.xml</a>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    methods:{
        getCSV(){
            alert('CSV')
        },
        getXML(){
            alert('XML')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
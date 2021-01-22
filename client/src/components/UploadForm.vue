<template>
  <div class="upload-file component-wrapper">
    <!-- form componenet -->

    <form enctype="multipart/form-data">
      <input id="upload-file" type="file" @change="uploadFile($event)" />
    </form>

    <!-- change compoennt  -->
    <h3>CSV to XML</h3>
    <span class="material-icons">cached</span>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UploadFile',
  data() {
    return {}
  },
  methods: {
    uploadFile(event) {
      const URL = 'http://localhost:5000/uploadfile'
      let data = new FormData()
      data.append('name', 'uploaded-file')
      data.append('file', event.target.files[0])
      console.log(event.target.files)

      axios.post(URL, data).then((response) => {
        console.log('image upload response > ', response)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
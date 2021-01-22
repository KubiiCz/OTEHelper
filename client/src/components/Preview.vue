<template>
  <div class="preview component-wrapper">
    <h2>Preview</h2>
    <hr />

    <table class="table">
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
        <tr>
          <td>98857658676867</td>
          <td>24 678</td>
          <td>4 675</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {}
  },
  mounted() {
    console.log('Component mounted')
    var response = axios.get('http://localhost:5000/getcsv').then((response) => {
      console.log(response.data)
      this.request = response.data.message
    })
  },
}
</script>

<style lang="scss" scoped>
</style>
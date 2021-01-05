<template>
  <h1>{{ message }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p>{{ request }}</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: String,
    request: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

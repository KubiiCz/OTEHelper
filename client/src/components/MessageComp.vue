<template>
  <p>{{ request }}</p>
</template>

<script>
export default {
  name: 'MessageComp',
  props: {
    request: String
  },
  data() {
    return {
    }
  }
}
</script>

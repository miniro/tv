<template>
  <div>{{ tv_name }}</div>
</template>

<script>
export default {
  name: 'BMain',
  props: {
    tv_name: {
      type: String
    }
  }
}
</script>

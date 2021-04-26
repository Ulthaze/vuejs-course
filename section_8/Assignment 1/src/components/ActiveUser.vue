<template>
  <div>
    <h2>{{ username }}</h2>
    <h3>{{ age }} </h3>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    }, 
  }
}
</script>
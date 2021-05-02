<template>
  <div>
    <TheHeader title="RememberMe" />
    <TheResources />
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/LearningResources/TheResources.vue';

  export default {
    components: {
      TheHeader,
      TheResources
    },
  };
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
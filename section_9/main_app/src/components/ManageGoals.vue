<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal"/>
    <button @click="saveGoal">Set Goal</button>
    <Teleport to="body">
      <ErrorAlert v-if="yes">
        <h2>ERROR</h2>
      </ErrorAlert>
    </Teleport>
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
  components: [ErrorAlert],
  data () {
    return {
      yes: false,
    }
  },
  methods: {
    saveGoal () {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.yes = true;
      }
    }
  }
}
</script>
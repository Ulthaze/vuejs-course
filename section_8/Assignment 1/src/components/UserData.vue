<template>
  <div>
    <h1>User Data</h1>
    <div>
      <input type="text" v-model="enterUsername" />
    </div>
    <div>
      <input type="text" v-model="enterAge" />
    </div>
    <div>
      <button @click="submitData">Add User</button>
    </div>
  </div>
</template>

<script>
export default {
  emits:['add-user'],
  data () {
    return {
      enterUsername: '',
      enterAge: ''
    }
  },
  methods: {
    submitData() {
      this.$emit('add-user', this.enterUsername, this.enterAge)
    }
  },
}
</script>
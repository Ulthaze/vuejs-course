<template>
  <section>
  <h2>My Friends</h2>
  <ul>
    <friend-contact></friend-contact>
  </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id:'a',
          name: 'b',
          phone: '1234',
          email: 'c'
        },
        {
          id:'a',
          name: 'b',
          phone: '1234',
          email: 'c'
        }
      ]		
    }
  }
};
</script>
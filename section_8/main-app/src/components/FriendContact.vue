<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? '(Favourite)' : ''}}
    </h2>
    <button @click="toggleFav">Toggle Fav</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: String,
    emailAddress: String,
    isFavourite: {
      type: Boolean,
      required: false,
      default: '0',
      validator: function(value){
        return value === true || value === false
      }
    }
  },
  emits: [
    'toggle-favourite',
    'delete'
    ],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav() {
      this.$emit('toggle-favourite', this.id);
    },
    deleteFriend(){
      this.$emit('delete', this.id);
    }
  },
}
</script>
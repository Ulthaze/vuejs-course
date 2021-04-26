<template>
  <div>
    <ul>
      <active-user
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :username="user.name"
        :age="user.age"
      ></active-user>
    </ul>
    <user-data @add-user="addUser"></user-data>
  </div>
</template>

<script>
import ActiveUser from './components/ActiveUser';
import UserData from './components/UserData.vue';
  export default {
    components: {ActiveUser, UserData},
    data () {
      return {
        users: [
          {
            id: "claire",
            name: "Claire",
            age: "34"
          },
          {
            id: "john",
            name: "John",
            age: "13"
          },
          {
            id: "Tim",
            name: "Tim",
            age: "23"
          }
        ],
      }
    },
    methods:{
      addUser(username, age) {
        const item = {
          id: username,
          name: username,
          age: age
        };
        this.users.push(item);
      },
    },
  };
</script>
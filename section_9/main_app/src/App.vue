<template>
  <div>
    <TheHeader />
    <button @click="setSel('active-goals')">Active Goals</button>
    <button @click="setSel('manage-goals')">Manage Goals</button>
    <!-- <ActiveGoals v-if="selectedComponents === 'active-goals'"></ActiveGoals>
    <ManageGoals v-if="selectedComponents === 'manage-goals'"></ManageGoals> -->
    <KeepAlive>
      <component :is="selectedComponents"></component>
    </KeepAlive>
  </div>
</template>

<script>
  import TheHeader from "./components/TheHeader.vue";
  // import UserInfo from "./components/UserInfo.vue";
  // import BadgeList from "./components/BadgeList.vue";
  // import CourseGoals from "./components/CourseGoals.vue";
  import ActiveGoals from "./components/ActiveGoals.vue";
  import ManageGoals from "./components/ManageGoals.vue";

  export default {
    components: {
      TheHeader,
      ActiveGoals,
      ManageGoals,
    },
    data() {
      return {
        selectedComponents: 'active-goals',
        activeUser: {
          name: "Josh R",
          description: "Site owner and admin",
          role: "admin",
        },
      };
    },
    methods: {
      setSel(cmp){
        this.selectedComponents = cmp;
      }
    }
  };
</script>

<style>
  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>
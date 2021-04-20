const app = Vue.createApp({

  data() {
    return { 
      userGoal: '',
      goals: [
      ],
      state: true
    };
  },

  methods: {
    addGoal () {
      this.goals.push(this.userGoal);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
    changeState () {
      this.state = !this.state;
    }
  },

  watch: {
    userGoal (value) {
      if (value != ''){
        const that = this;
        setTimeout(function() {
          that.userGoal = '';
        }, 2000);
      }
    }
  }
});

app.mount('#user-goals');

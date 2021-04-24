const app = Vue.createApp({
    data () {
        return {
            friends: [
                {
                    id: 'bob', 
                    name: 'bob smith', 
                    phone: '01234', 
                    email: 'bob@bob'
                },
                {
                    id: 'jim', 
                    name: 'jim smith', 
                    phone: '56789', 
                    email: 'jim@jim'
                }
            ]
        }
    },


});

app.component('friend-contact', { 
    template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails()">
            {{ detailsAreVisible ? 'Hide' : 'Show' }}Details
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
        `
        ,
    data () {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'jim', 
                name: 'jim smith', 
                phone: '56789', 
                email: 'jim@jim'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');
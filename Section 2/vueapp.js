const app = Vue.createApp({
    data() {
        return {
            messages: [
                'Test 1',
                'Test 2',
                '<b>Test 3</b>',
                
            ],
            link: 'https://duckduckgo.co.uk'
        };
    },
    methods: {
        selectMessage() {
            const item = this.messages[Math.round(Math.random()*2)];
            return item;            
        }
    }
});

app.mount('#testSection');
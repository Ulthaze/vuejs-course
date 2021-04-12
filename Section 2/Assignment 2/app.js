const app = Vue.createApp({
    data() {
        return {
            a:1,
            keystroke: 'Default Text',
            keystrokeDown: 'Default Text'
        }
    },
    methods: {
        blank() {
            return 0;
        },

        alert(){
            alert('Button is pressed');
        },

        keypress(event) {
            this.keystroke = event.target.value;
        },

        keypressEnter(event){
            this.keystrokeDown = event.target.value;
        }
    }
});

app.mount('#assignment');
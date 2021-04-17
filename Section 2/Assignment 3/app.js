const app = Vue.createApp({
    data () {
        return {
            number: 0,
            result: '',
        }
    },
    watch: {
        number (value) {
            if (value < 37) {
                this.result = 'Keep Going!';
            } else if (value === 37) {
                this.result = 'Got there!'
            } else if (value > 37) {
                this.result = 'Too far!'
            }
        },
        result (value) {
            if (value != '') {
                const that = this;
                setTimeout(function(item){
                    that.number = 0;
                }, 5000);
            }
        }
    },
    methods: {
        increaseValue(value) {
            this.number = this.number + value;
        }
    },
    computed: {
    }
});

app.mount('#assignment');
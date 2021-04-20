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

const events = Vue.createApp({
    data () {
        return {
            counter: Math.round(Math.random()*100)/100,
            name: '',
            lastName: '',
            confirmedName: '',
            // fullname: ''
        };
    },
    watch: {
        name(value) {
            if (value === '') {
                return '';
            } else {
                this.fullname = value + ' ' + this.lastName;
            };
        },
        confirmedName(value) {
            if (value === '') {
                return '';
            } else {
                this.fullname = this.name + ' ' + this.lastName;
            };
        },
        counter(value) {
            if (value > 50) {
                this.counter = 0;
            }
        },
    },
    methods: {
        increaseCounter(i) {
            this.counter = this.counter + i;
        },

        decreaseCounter(i) {
            this.counter = this.counter - i;
        },

        updateName(event, suffix) {
            // this.name = event.target.value + ' ' + suffix;
            this.name = event.target.value;
        },

        submit() {
            alert('Button Clicked');
        },

        confirmName(){
            this.confirmedName = this.name; 
        },

        resetInput() {
            this.name = '';
        },

        fullName() {
            if (this.name === ''){
                return '';
            }
            return this.name + ' ' + this.lastName;
        }
    },
    computed: {
        fullname() {
            if (this.name === ''){
                return '';
            }
            return this.name + ' ' + this.lastName;
        }
    },
})

const styling = Vue.createApp({
    data () {
        return {
            boxA: false,
            boxB: false,
            boxC: false
        };
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxA = !this.boxA;
            } else if (box === 'B') {
                this.boxB = !this.boxB;
            } else if (box === 'C') {
                this.boxC = !this.boxC;
            }
        }
    },
    watch: {

    },
    computed: {
        boxAClasses (){
            return { active: this.boxA};
        }
    }
})

app.mount('#testSection');
events.mount('#events');
styling.mount('#styles');
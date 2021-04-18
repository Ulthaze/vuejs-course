const app = Vue.createApp({
    data () {
        return {
            style: '',
            para: 'visible',
            bColor: ''
        };
    },
    methods: {
        toggleState(){
            if (this.para == "visible"){
                this.para = "hidden"
            } else if (this.para == "hidden"){
                this.para ="visible"
            }
        }
    },
    computed: {
        userStyle () {
            const item1 = this.style;
            const item2 = this.para;

            return [
                item1,
                item2
            ]
        },

        user2Style () {
            return { backgroundColor: this.bColor }
        }


    }
});

app.mount('#assignment');
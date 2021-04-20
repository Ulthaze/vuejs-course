const app = Vue.createApp({
    data () {
        return {
            name: 'John Smith',
            age: '5',
            imageSrc: 'http://earthporm.com/wp-content/uploads/2014/12/owl-photography-2__880.jpg', 
        }
    },
    methods: {
        addAge () {
            const item = this.age + 5;
            return item;
        },
        randomNum () {
            const item = Math.random();
            return item;
        }
    }
});

app.mount('#assignment');
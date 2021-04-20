function numberRange(low, high) {
    var value = Math.floor(Math.random() * (high/low)) + low;
    return value; 
}

const app = Vue.createApp({

    data () {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            round: 0,
            winner: null,
            attackLog: [],
            damageLog: [],
            healLog: [],
            logs: [],
        };
    },

    methods: {
        attack () {
            const damage = numberRange(5,12);
            this.monsterHealth -= damage;
            this.addLogMessage('player', 'attacked', damage);
            this.monsterAttack();
        },
        sAttack () {
            const damage = numberRange(8,22);
            this.monsterHealth -= damage;
            this.addLogMessage('player', 'attacked', damage);
            this.monsterAttack();
        },
        heal () {
            const heal = numberRange(20,30);
            if (this.playerHealth + heal > 100) {
                this.playerHealth = 100;
            } else if (this.playerHealth + heal <= 100) {
                this.playerHealth = this. playerHealth + heal;
            };
            this.addLogMessage('player', 'healed', heal);
            this.monsterAttack();
        },
        surrender () {
            this.playerHealth = 0;
        },
        monsterAttack () {
            const damage = numberRange(8,17);
            this.playerHealth -= damage;
            this.addLogMessage('monster', 'attacked', damage);
            this.round ++;
        },
        resetGame () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.round = 0;
            this.winner = null;
        },
        addLogMessage(who,what,value){
            this.logs.unshift({
                by: who,
                what: what,
                value: value
            })
        }
    },

    computed: {
        playerHealthBar () {
            return {width: this.playerHealth + '%'}
        },
        monsterHealthBar () {
            return {width: this.monsterHealth + '%'}
        },
        enableSpecial () {
            return this.round % 3 !== 0;
        }
    },

    watch: {
        playerHealth (value) {
            if (value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw';
                this.playerHealth = 0;
                this.monsterHealth = 0;
            } else if (value <= 0) {
                this.winner = 'monster';
                this.playerHealth = 0;
            }
        },
        monsterHealth (value) {
            if (value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw';
                this.monsterHealth = 0;
                this.playerHealth = 0;
            } else if (value <= 0) {
                this.winner = 'player';
                this.monsterHealth = 0;
            }
        }
    },
});

app.mount('#game');
new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        playerDamage: 0,
        monsterDamage: 0,
        playerHeal: 0,
        battleLog: [],
    },
    methods: {
        startGame(){
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.battleLog = []
            this.battleLog.push('Battle started!')
        },
        attack(){
            this.dealDamage(11,10);
            this.endGame(this.playerHealth,this.monsterHealth)
        },
        specialAttack(){
            this.dealDamage(15,10);
            this.endGame(this.playerHealth,this.monsterHealth)
        },
        heal(){
            this.playerHeal = Math.floor(Math.random() * 12);
            this.monsterDamage = Math.floor(Math.random() * 10);
            this.playerHealth = this.playerHealth + this.playerHeal - this.monsterDamage;
            this.maxHealth();
            this.battleLog.push('Player healed ' + this.playerHeal + ' health');
            this.battleLog.push('Monster dealt ' + this.monsterDamage + ' damage to player');
            this.endGame(this.playerHealth,this.monsterHealth)
        },
        giveUp(){
            this.gameIsRunning = false
        },
        dealDamage(playerDamage,monsterDamage){
            this.playerDamage = Math.floor(Math.random() * playerDamage);
            this.monsterDamage = Math.floor(Math.random() * monsterDamage);
            this.monsterHealth = this.monsterHealth - this.playerDamage;
            this.battleLog.push('Player dealt ' + playerDamage + ' damage to monster')
            this.playerHealth = this.playerHealth - this.monsterDamage;
            this.battleLog.push('Monster dealt ' + monsterDamage + ' damage to player')
        },
        maxHealth(){
            if(this.playerHealth > 100){
                this.playerHealth = 100
            }
        },
        endGame(playerHealth, monsterHealth){
            if(monsterHealth <= 0){
                alert('You have won!')
                this.gameIsRunning = false
            }else if(playerHealth <= 0){
                alert('You have lost!');
                this.gameIsRunning = false
            }
        }
    },
})
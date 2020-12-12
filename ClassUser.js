class humans {
    constructor(pseudo) 
    {
        this.pseudo = pseudo;
        this.level = 1;
        this.xp = 0;
        this.force = 50;
        this.pv = 100;
    }

    User() {
        console.log('\nPerso: ' + this.pseudo + '\n Level: ' + this.level + '\n XP: ' + this.xp + '\n Force: ' + this.force + '\n PV: ' + this.pv);
    }

}

let playeur = new humans('Hook');
playeur.User();






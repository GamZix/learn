class monsters {
    constructor(name) 
    {
        this.name = name;
        this.level = 1;
        this.force = 10;
        this.pv = 100;
    }

    Perso() {
        console.log('\nMonster: ' + this.name + '\n Level: ' + this.level + '\n Force: ' + this.force + '\n PV: ' + this.pv);
    }

}

let monster1 = new monsters('Crops');
monster1.Perso();
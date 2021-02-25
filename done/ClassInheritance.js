class Human{
    constructor(name){
        this.name=name;
    }
    talk(){
        console.log(`Im a human! my name is ${this.name}`);
    }
}
class Hero extends Human{
    constructor(name){
        super(name);
    }
}

const Wanda = new Hero("Wanda");

Wanda.talk();
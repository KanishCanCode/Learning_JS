class animal{
    alive =true;
    eat(){
        console.log(`this ${this.name} is eating`)

    }
    sleep(){
        console.log(`this ${this.name} is sleeping`);

    }
}

class Rabbit extends animal{
    name="rabbit";
}

class Fish extends animal{
    name="fish";
}

class Hawk extends animal{
    name="hawk";
}

const rabbit=new Rabbit();
const fish = new Fish();
const haek = new Hawk();
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
console.log(fish.alive);
fish.eat();
fish.sleep();
console.log(haek.alive);

haek.eat();
haek.sleep();
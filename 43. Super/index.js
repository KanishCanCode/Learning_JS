//super used properties of the parent class.


class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(speed){
        console.log(` this ${this.name} moves at a spedd of ${speed}`)
    }
}
class Rabbit extends Animal{
constructor(name,age,runspeed){
    super(name,age);
    this.runspeed=runspeed;
}
 run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runspeed);
    }
}
class Fish extends Animal{
   constructor(name,age,swimspeed){
   super(name,age);
    this.swimspeed=swimspeed;
   
} 
 swim(){
        console.log(`this ${this.name} can swim`);
        super.move(this.swimspeed);
    }
}
class Hawk extends Animal{
    constructor(name,age,flyspeed){
    super(name,age);
    this.flyspeed=flyspeed;
}
fly(){
console.log(`This animal ${this.name} can fly`);
super.move(this.flyspeed);
    }
}

const rabbit = new Rabbit("rabbit",1,26);
const fish = new Fish("fish",2,16);
const hawk = new Hawk("hwak1",6,26);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);
console.log(rabbit.run())
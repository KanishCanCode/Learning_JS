const perosn1 = {
    name:"jakie",
    favFood:'ramen',
    sayhello: function(){console.log(`hi i am ${this .name}`)},
    eat:function(){console.log(`this person likes ${this.favFood}`)}
}
const perosn2 = {
    name:"Jha",
    favFood:'cake',
    sayhello: function(){console.log(`hi i am ${this .name}`)},
    eat:function(){console.log(`this person likes ${this.favFood}`)}
}
perosn1.sayhello()
perosn1.eat();



perosn2.sayhello()
perosn2.eat();

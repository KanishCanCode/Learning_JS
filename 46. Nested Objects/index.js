/* nested objects.  objects inside of other objects.
Allows you to represenet more complex data structures
child object is neclosed by a parent object

Person(Adress{},contrat{})

Example 1


const person={
    fullName:"Jim",
    age:33,
    isStudent:true,
    hobbies:["writing","cooking","karate"],
    address:{
        street:"Bhel",
        city:"Joto",
        county:"XYZ"
    }

}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address);

for(const property in person.address){
    console.log(person.address[property]);
}

for(const info in person){
    console.log(person.address[info]);
}

*/

//Example 2
class Address{
    constructor(street,city,country){
        this.street=street;
        this.city=city;
        this.country=country;
    }
}
class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address);
    }
}

const person1=new Person("jk",30,"123","JW hills","USA");
const person2=new Person("LOL",35,"124","JW hills","USA");
const person3=new Person("BB",24,"125","JW hills","USA");

console.log(person1.address.street);
console.log(person2.address.street);
console.log(person3.address.street);

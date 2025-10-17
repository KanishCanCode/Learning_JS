// DEstructurin = extract values from arrays and objects,
// then assign them to variables in a convenient way.
// [] = to perform array destructuring
//{}=top perform object destructuring

// Example 1
/*

let a= 1;
let b=2;

[a,b]=[b,a];

console.log(a);
console.log(b)

*/

// Example 2

/*
const colours = ["red","blue","green","black","white"];

[colours[0],colours[4]]=[colours[4],colours[0]];

console.log(colours);


const [firstcolour,seconfcolour,thirdcolor,...extraColors]=colours;

console.log(firstcolour);
console.log(seconfcolour);
console.log(thirdcolor);
console.log(extraColors);

*/

//Example 3

/*


const person1={
    firstName:"aloo",
    lastName:"squid",
    age:30,
    job:"Aura farmer",
}

const person2={
    firstName:"jimmy",
    lastName:"sid",
    age:20,
   
}

const {firstName,lastName,age,job="Learning"}=person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

*/

//Example 4

function displayPerson({firstName,lastName,age,job="grinding"}){
    console.log(`name : ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);

}
const person1={
    firstName:"aloo",
    lastName:"squid",
    age:30,
    job:"Aura farmer",
}

const person2={
    firstName:"jimmy",
    lastName:"sid",
    age:20,
   
}

displayPerson(person1);
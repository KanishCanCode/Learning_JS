// arrow function - a concise way to write function expression good for simple
// funtions that you use only once
//(parameter)=> some code


//------------Example 1-------------

const hello= ()=>console.log("hello");
hello();

//------------Example 2-------------

const hello1 =(name)=>console.log(`hello ${name}`);

hello1("yz")

//------------Example 3-------------

//setTimeout(function(){ console.log("hello")},3000);

setTimeout(()=>console.log("hello Star my repo"),3000);


//------------Example 4-------------

const numbers =[1,2,4,5,6,7,8,8];
const squares = numbers.map((element)=>Math.pow(element,2));
const cube = numbers.map((element)=>Math.pow(element,3));
const even = numbers.filter((element)=>element%2===0);
const odd = numbers.filter((element)=>element%2!==0);
const sum = numbers.reduce((accumulator,element)=> accumulator+element);

console.log(squares)
console.log(cube)
console.log(even)
console.log(odd)
console.log(sum)

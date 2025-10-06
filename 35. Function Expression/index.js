
// -------Example 1-------
const hello =function(){
    console.log("hello")
}
hello();

//--------Example 2------
setTimeout(function(){
    console.log("ehllo")
},3000)

//-------Example 3-------

const numbers= [1,2,3,4,5,6,7,8,9,10];
const squares = numbers.map(function(element){
    return Math.pow(element,2);
});

console.log(squares)


const cube = numbers.map(function(element){
    return Math.pow(element,3);
})
console.log(cube)

const evennums =numbers.filter(function(element){
    return element%2===0;
})
console.log(evennums)

const odd=numbers.filter(function(element){
    return element%2!==0;
})
console.log(odd)

const total= numbers.reduce(function(accumulator,element){
    return accumulator+element;
});
console.log(total)
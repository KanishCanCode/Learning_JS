//.filter() = creates a new array by filtering out elements
/*
--------------Example 1-----------------

let numbers =[1,2,3,4,5,6,7,8,9,10];

let even = numbers.filter(isEven)
let odd =numbers.filter(isOdd)
console.log(odd)
console.log(even)
function isEven(element){
    return element%2===0;
}

function isOdd(element){
    return element%2!==0;
}

-----------Example 2-------------------



const ages =[16,14,17,22,19,88];
const adults = ages.filter(adult);
console.log(adults)

function adult(element){
    return element>=18;
}
const achild = ages.filter(isChild);
console.log(achild)

function isChild(element){
    return element<18;

    }

-------------Example 3----------------
    */

const words=["amazon","google","microsoft","linux","AMD","Intel","Nvidia"];
const shortwords = words.filter(getShortie);
console.log(shortwords)
function getShortie(element){
    return element.length <=6;
}
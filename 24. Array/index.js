let fruits = ["apple","ice","banana"];


fruits[0]="choco";
fruits.push("cheese");
fruits.pop();
fruits.unshift("mango");
fruits.shift();
console.log(fruits);

let NumberofFRuits=fruits.length;
let index=fruits.indexOf("apple");
console.log(index);
console.log(NumberofFRuits);

for(let i =0;i<fruits.length;i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}


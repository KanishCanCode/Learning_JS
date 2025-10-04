let number = [1,2,3,4,5,6];
let maximum=Math.max(...number);
console.log(maximum);
let minimum=Math.min(...number);
console.log(minimum);

let username= "Dominator";
let letter =[...username].join("-")
console.log(letter);

let fruits=["apple","banana","orange","pear"]
let vegetables=["carrot","potato"]
let newFRuits=[...fruits,...vegetables];
console.log(newFRuits);

const price =[123,453,21,43,5,6,3,52,41]
const total = price.reduce(sum)
console.log(total)
function sum(accumulator,element){
return accumulator+element;
}
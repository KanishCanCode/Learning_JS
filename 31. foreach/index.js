/*let num = [1,2,3,4,5];

function display(element){
    console.log(element);
}
num.forEach(display);
num.forEach(double);
function double(element,index,array){
    array[index]=element*2;

}
*/
let fruits = ["apple","orange","bananana","cake"];
fruits.forEach(capatilize)
fruits.forEach(display1);

function upper(element,index,array){
    array[index]=element.toUpperCase();
  
}
function display1(element){
    console.log(element);
}

function lower(element,index,array){
    array[index]=element.toLowerCase();
  
}
function capatilize(element,index,array){
array[index]=element.charAt(0).toUpperCase()+element.slice(1);
}
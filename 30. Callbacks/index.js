/*
callback = a function that passed
 as an argument to another function.
 */

/*

function hello(callback){
    console.log("hello!");
    callback();
}

function leave(){
    console.log("leave");
}

function wait(){
    console.log("wait");
}
function goodbye(){
    console.log("goodbye");
}

hello(goodbye);
hello(leave);

*/


function sem(callback,x,y){
    let result =x+y;
    callback(result);
}

function display(result){
    console.log(result);
}
sem(displayPage,1,2);

function displayPage(result){
    document.getElementById("myH1").textContent=result;

}
const pi = 3.14159
let radius;
let circumference;

//radius=window.prompt("enter the radius :")

console.log(circumference);
document.getElementById("mySubmit").onclick=function(){
    radius =document.getElementById("myText").value
    radius=Number(radius)
circumference= pi*2*radius;
document.getElementById("myh3").textContent=circumference+"cm";
}
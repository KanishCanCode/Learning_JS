/*let username;
username = window.prompt("what is you name");
console.log(`you are ${username}`)
*/

let username;
document.getElementById("mySubmit").onclick=function(){
username = document.getElementById("myText").value,
console.log(username);
document.getElementById("myID").textContent=`hello ${username}`;
}
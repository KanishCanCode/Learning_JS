/*let username= "";
do{
    username=window.prompt("Enter your name");
}while(username==="" || username===null)


console.log(`welcome ${username}`);

*/

let loggedIn =false;
let username;
let password;

while(!loggedIn){
    username=window.prompt("enter your username");
    password=window.prompt("enter your password");
    if(username==="my" && password==="pass"){
        loggedIn=true;
        console.log("you are logged in");
    }else{
        console.log("inavlid credentials, try again");
    }
}
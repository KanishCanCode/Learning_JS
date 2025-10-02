// No method chaining

let username=window.prompt("enter you username");
username=username.trim();
let letter = username.charAt(0);
letter = letter.toLocaleUpperCase();
let extrachars=username.slice(1);
extrachars=extrachars.toLocaleLowerCase();
username=letter+extrachars;
console.log(username);

//Using. method chaining

username= username.trim().charAt(0).toLocaleUpperCase()+username.trim().slice(1).toLocaleLowerCase();
console.log(username)
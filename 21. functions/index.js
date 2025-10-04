let user=window.prompt("what is you name");
let age=window.prompt("what is your age");
function happybirthday(user,age){
    console.log(`happy birthday ${user} you are ${age}`);
}

happybirthday(user,age);

//return example

function add(x,y){
    return x+y;
}
console.log(add(22,3));
let answer =add(2,3);

function suub(x,y){
    return x-y;
}

function mul(x,y){
    return x*y;
}
function dev(x,y){
    if(y==0){
        console.log("can not divide by zero");
        return;
    }else{
    return x/y;}
}

function isEven(number){
    if(number%2===0){
        console.log("the number is even");
    }else{
        console.log(" The number is odd");
    }
}
isEven(5)

// return number%2===0 ? true:false;

function isValid(email){
    if(email.includes("@")){
        return true;
    }else{
        return true;
    }
}
console.log(isValid("john@gmail.com"))
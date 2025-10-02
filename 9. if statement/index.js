let isStudent = false;
const myText = document.getElementById("myText");
const mySubmit=document.getElementById("mySubmit");
const resultElement= document.getElementById("resultElement")
let age;
mySubmit.onclick=function(){
    age=myText.value;
    age=Number(age);
if(age>=16){
    resultElement.textContent=`you are not old enoiuh`
    if(hasLicense){      
            resultElement.textContent=`you have  license`
    }
    else{
            resultElement.textContent=`you do not have your license yet`
    }
}
else{
    resultElement.textContent=`you must me 16+ for a license`

}

}
/*if(isStudent){
    console.log("you are a student");
}
else{
    console.log("yo are not a student");
}

let age =25;
let hasLicense = false;
*/


/*


const f1="chole";
const f2="chole bhature";
const f3="chole puri";
const f4="chole kulche";
const f5="chole paratha";

function openFridge(...foods){
    console.log(...foods);
}
openFridge(f1,f2,f3,f4,f5);



//...->spread operator

*/

function sum(...numbers){
    Number(numbers);
    let result=0;
    for(let number of numbers){
        result+=number;
    }
    return result;
}
const total=sum(1,2,4,5,6);
console.log(total)

function combineString(...strings){
    return strings.join(" ");
}

const fullname=combineString("MR.","KARL","Luthar");
console.log(fullname);
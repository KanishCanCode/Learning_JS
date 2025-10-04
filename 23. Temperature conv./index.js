const textBox = document.getElementById("textBox");
const ToFar = document.getElementById("ToFar");
const ToCelsius = document.getElementById("ToCelsius");
const result = document.getElementById("result");
let temp;


function convert(){
    if(ToFar.checked){
        temp=Number(textBox.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+"F";
    }
    else if(ToCelsius.checked){
        temp=Number(textBox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"F";
    }
    else{
        result.textContent="Select an unit";
    }
}
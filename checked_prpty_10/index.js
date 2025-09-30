const myCkeckbox = document.getElementById("myCkeckbox");
const visabtn = document.getElementById("visabtn");
const masterCardbtn = document.getElementById("masterCardbtn");
const Paypalbtn = document.getElementById("Paypalbtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mySubmit.onclick=function(){
    if(myCkeckbox.checked){
subResult.textContent=`Yor are subscribed`;
    }
    else{
        subResult.textContent=`You are not sunscribed`;
    }
    if(visabtn.checked){
        payResult.textContent=`You are paying with visa`;
    }
    else if(masterCardbtn.checked){
        payResult.textContent=`You are paying with MasteCard`;
    }
    else if(Paypalbtn.checked){
        payResult.textContent=`You are paying with paypal`;
    }
    else{
        payResult.textContent=`you must select a payment type`;
    }
}


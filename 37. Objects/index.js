const person ={
    firstname:"jackie",
    lastname:"chan",
    age:99,
    isemployed:true,
    sayhello:function(){ console.log("hello I am jackie chan")},
    saybye: (firstname)=> console.log(`bye bye ${firstname}`),
}
console.log(person.age)
console.log(person.sayhello())
console.log(person.saybye("jjk"))


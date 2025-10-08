/*
------Example 1-----------------------
class MathUtil{
    static PI=3.14159;
    static getDiameter(radius){
        return radius*2;
    }
    static getCircum(radius){
        return this.PI*radius*2;
    }
     static getArea(radius){
        return this.PI*(radius**2);
    }

}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircum(10));
console.log(MathUtil.getArea(10));

*/

class user{
    static userCount=0;
    constructor(username){
        this.username=username;
        user.userCount++;
    }
    sayHello(){
        console.log(`My username is ${this.username}`);
    }
    static getUserCount(){
        console.log(`there are ${user.userCount} users online`)
    }
}

const user1 = new user("jjk")

const user2 = new user("OpenAI")

const user3 = new user("MS")
console.log(user.userCount)
user1.sayHello()
user.getUserCount()
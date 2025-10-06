// .map()= accepts a callabck and applies that funvtion
// to each element of an array , then return  a new array.


/*
----------------EXAMPLE 1----------------------
const numbers=[1,2,3,4,5];
const squares = numbers.map(square)
const cube = numbers.map(cubes);
console.log(cube)
console.log(squares)
function square(element){
    return Math.pow(element,2);
}
function cubes(element){
    return Math.pow(element,3);
}

----------------EXAMPLE 2-------------------- 
const students=["naruto","GOjo","muzan"];
const upper = students.map(uppercase)
console.log(upper)

function uppercase(element){
    return element.toUpperCase();
}

------------Example 3-------------------------
*/

const dates = ["2024-1-10","2025-2-20","2026-3-30"];
const fordates=dates.map(formatDates);
console.log(fordates)
function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}

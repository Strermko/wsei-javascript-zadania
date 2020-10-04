// Zadanie 1
const x = true,
    y = false;

console.log(x === y); // false

// Zadanie 2
const numOne = 10;
const numTwo = 3;

let moduloResult = 0;
moduloResult = numOne % numTwo;
console.log(moduloResult); //1  

// Zadanie 3
let str1 = 'pirka',
    str2 = 'pipirka',
    stringsResult = '';

stringsResult = str1 + ' ' + str2;
console.log(stringsResult);

// Zadanie 4
var someNumber = 425;
var someString = "425";

console.log(someNumber == someString); // true
console.log(someNumber === someString); // false

// Zadanie 5
let counter = 30;

console.log(counter); //30
counter++;
console.log(counter); //31
counter--;
console.log(counter);//30

// Zadanie 6
let n1 = 5,
    n2 = 6,
    result = null;
    
result = n1 > n2;

console.log(result); // false
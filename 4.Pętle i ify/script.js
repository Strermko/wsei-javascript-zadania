// Zadanie 1
let n1 = 15,
    n2 = 6;

n1 > n2 ? console.log(n1) : console.log(n2);

// Zadanie 2
let num1 = 50,
    num2 = 15,
    num3 = 78;

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} jest największa`);
} else if (num2 > num3 && num2 > num1) {
    console.log(`${num2} jest największa`);
} else {
    console.log(`${num3} jest największa`);
}

// Zadanie 3
for (i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}

// Zadanie 4
let result = 0;

for (let i = 1; i <= 10; i++) {
    result += i;
}
console.log(result);

// Zadanie 5
var n = 5;
for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(`${i} - parzysta`)
    } else {
        console.log(`${i} - nieparzysta`)
    }
}

// Zadanie 6
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(`i = ${i}; j = ${j}`);
    }
}

// Zadanie 7
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    } else {
        console.log(`${i}`);
    }
}

// Zadanie 8

//a)
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

//b)
let count = 4;
for (let i = 1; i <= 5; i++) {
    console.log(" ".repeat(count) + "* ".repeat(i));
    count--;
}

//c)
let count1 = 4;
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(" ".repeat(count1) + "*".repeat(i) + " ".repeat(count1));
        count1--;
    }
}

//d
let str = '*1234';
for (let j = 0; j <= 12; j++) {
    if (j === 6) {
        console.log('-----');
    } else if (j < 6) {
        console.log("*".repeat(j) + str.slice(j));
    } else {
        console.log("*".repeat(12 - j) + str.slice(12 - j));
    }
}

//e
let count2 = 4;
for (let i = 1; i <= 8; i++) {
    if (i <= 5) {
        console.log(" ".repeat(count2) + "* ".repeat(i));
        count2--;
    } else {
        console.log("    *")
    }
}
// Zadanie 1
const arr = [1, 4, 5];
console.log(arr);

// Zadanie 2
const arr1 = [1, 4, 5, 'test'];
console.log(`${arr1[0]} ${arr1[1]}`);
console.log(`${arr1[arr1.length - 1]}`);
arr1.forEach(element => {
    console.log(element);
});
for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
        console.log(arr1[i]);
    }
}
for (let i = 0; i < arr1.length; i++) {
    if (typeof (arr1[i]) === 'string') {
        console.log(arr1[i]);
    }
}
for (let i = 0; i < arr1.length; i++) {
    if (typeof (arr1[i]) === 'number') {
        console.log(arr1[i]);
    }
}

// Zadanie 3
const arr2 = [1, 3, 6, 8];
// 1)
console.log(`${arr2.reduce((a, b) => a + b, 0)}`);
// 2)
console.log(`${arr2.reduce((a, b) => a - b, arr2[0])}`);
// 3)
console.log(`${(arr2.reduce((a, b) => a + b, 0)) / arr2.length}`);
// 4)
arr2.forEach(el => {
    if (el % 2 === 0) {
        console.log(el);
    }
});
// 5)
arr2.forEach(el => {
    if (el % 2 !== 0) {
        console.log(el);
    }
});
// 6)
arr2.sort((a, b) => a - b)
console.log(arr2[arr2.length - 1]);
// 7)
const arr2 = [1, 3, 6, 8];
console.log(arr2[0]);
// 8)
const arr2 = [1, 3, 6, 8];
for (let i = (arr2.length - 1); i >= 0; i--) {
    console.log(arr2[i]);
}

// Zadanie 4
const arrFunc = (arr = []) => arr.reduce((a, b) => a + b, 0);
console.log(arrFunc([2, 4, 6, 7]));

// Zadanie 5
const averageArrFunc = (arr = []) => {
    const average = arr.reduce((a, b) => a + b, 0) / arr.length;

    arr.forEach(el => {
        console.log(`${Math.round(el * average)}`);
    });
};

averageArrFunc([9, 1, 7, 2, 1, 1, 6, 3, 2]);

// Zadanie 6
const averageArrFunc = (arr = []) => {
    let counter = 0,
        value = 0;

    arr.forEach(el => {
        if (el % 2 === 0) {
            value += el;
            counter++;
        }
    });

    return Math.round(value / counter);
};

console.log(averageArrFunc([9, 1, 7, 2, 1, 1, 6, 3, 2]));

// Zadanie 7

function sortArray(arr = []){
    return arr.sort((a, b) => a - b);
}

console.log(sortArray([1,8,2,7,1]));

// Zadabie 8
function indexSum(arr1 = [], arr2 = []) {
    return arr1.length + arr2.length;
}

console.log(indexSum([1,2,5], [2,7,2]));

// Zadanie 9
function removeElement(arr = [], element) {
    return arr.filter(el => el !== element);
}

console.log(removeElement([1,5,2,1,6,3], 1));

// Zadanie 10
function changer(arr = []){
    return arr.map(el => el * (-1));
}

console.log(changer([1,5,6,7,2]));
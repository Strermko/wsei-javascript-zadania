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
for (i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
        console.log(arr1[i]);
    }
}
for (i = 0; i < arr1.length; i++) {
    if (typeof (arr1[i]) === 'string') {
        console.log(arr1[i]);
    }
}
for (i = 0; i < arr1.length; i++) {
    if (typeof (arr1[i]) === 'number') {
        console.log(arr1[i]);
    }
}

// Zadanie 3
const arr2 = [1, 3, 6, 8];
// 1)
console.log(`${arr2.reduce((a, b) => a + b, 0)}`);
// 2)
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
// Zadanie 1
const hi = setInterval(() => {
    console.log("Cześć po raz " + counter)
    counter += 1;
    if (counter >= 16) {
        clearInterval(hi);
    }
}, 3000);
let counter = 1;

// Zadanie 2
const testArr = [1, 2, 3, 4, 5];
const arr = setTimeout(() => {
    testArr.forEach(element => {
        console.log(element)
    });
    const insertArr = setInterval(() => {
        if (testArr[counter1]) {
            console.log(testArr[counter1]);
            counter1++;
        } else{
            clearInterval(insertArr);
        }
    }, 3000);
}, 2000);
let counter1 = 0;
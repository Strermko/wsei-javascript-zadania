// Zadanie 1
/* const tagArray = tagSelector('more-divs');
console.log(tagArray);

function tagSelector(className) {
    const nodeList = document.querySelectorAll(`.${className}`),
        tagList = [];

    nodeList.forEach(el => {
        tagList.push(el.tagName);
    });

    return tagList;
} */


// Zadanie 2
/* function elementLoger(selector) {
    const element = document.querySelector(`.${selector}`);

    console.log(element.innerHTML);
    console.log(element.outerHTML);
    console.log(element.className);
    console.log(element.classList);
    console.log(element.dataset);
}

elementLoger('short-list'); */

// Zadanie 3
/* function dataCounter(selector) {
    const element = document.getElementById(`${selector}`),
        numberOne = parseInt(element.getAttribute('data-numberone')),
        numberTwo = parseInt(element.getAttribute('data-numbertwo')),
        numberThree = parseInt(element.getAttribute('data-number-three'));

    console.log(numberOne + numberTwo + numberThree);
    console.log(numberOne - numberTwo - numberThree);
}
dataCounter('datasetCheck'); */

// Zadani 4
//document.getElementById('spanText').textContent = 'Pipka';

// Zadanie 5
//document.getElementById('spanText').className = 'Pipka';

// Zadanie 6
/* const div6 = document.getElementById('classes'),
    classLst = div6.classList;

function classLoger(classArray) {
    let str = '';
    console.log(classArray.length);
    classArray.forEach(element => {
        console.log(element);
        if (classArray.item(classArray.length - 1) === element) {
            str += element;
        } else {
            str += element + ' + ';
        }
    });
    console.log(str);
    div6.className = '';
    console.log('Usunięto wszystkie klasy');
}
classLoger(classLst); */

// Zadanie 7
/* const liList = document.querySelectorAll('#longList > li');

liList.forEach(element => {
    if (!element.getAttribute('data-test')) {
        element.dataset.text = 'text';
    }
});
console.log(liList); */

// Zadanie 8
/* function parser(string) {
    return JSON.parse(`{"newClass": "${string}"}`);
}

const ex8 = (elementID) => {
    const obj = parser('string_z_parametru'),
        element = document.getElementById(elementID);

    element.className = obj.newClass;
};

ex8('myDiv'); */

// Zadanie 9
/* function classAdder(number) {
    const element = document.getElementById('numbers');

    if (number > 0 && number < 10) {
        if (number % 2 === 0) {
            element.classList = '';
            element.classList.add('even');
        } else {
            element.classList = '';
            element.classList.add('odd');
        }
    }
}
classAdder(Math.floor(Math.random() * 10)); */

// Zadanie 10
/* function arrayer(elementID) {
    const element = document.querySelectorAll(`#${elementID} li`),
        arr = [];
    console.log(element);
    element.forEach(el => {
        arr.push(el.textContent);
    });
    return arr;
}

const testArray = arrayer('longList'); */

// Zadanie 11
/* function numChanger(list) {
    list.forEach(element => {
        let num = Math.floor(Math.random() * 10);
        element.dataset.number = element.textContent;
        element.textContent = num;
    });
}

const arr = document.querySelectorAll('#longList li');
numChanger(arr); */
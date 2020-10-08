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
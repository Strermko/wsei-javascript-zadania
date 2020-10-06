// Zadanie 1
const lists = document.querySelectorAll('.list');

// Zadanie 2
function searcher(target){
    const list = document.querySelectorAll(target);
    return list;
}

const test = searcher('.list');
console.log(test);

// Zadanie 3
/* First option: 
const listId = document.querySelector('#list');
 */
const listId = document.getElementById('list');

// Zadanie 4
/* function searcher(target){
    const list = document.querySelectorAll(target);
    return list;
} */

const li = searcher('li'),
    ul = searcher('ul'),
    span = searcher('span'),
    divSpan = searcher('.list span'),
    idSpan = searcher('#spans span');

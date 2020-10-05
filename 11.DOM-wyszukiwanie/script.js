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
// Zadanie 1
const buz = document.getElementById('buz'),
    baz = document.getElementById('baz'),
    foo = document.getElementById('foo');

console.log(buz.parentElement);
console.log(baz.previousElementSibling);
console.log(foo.children);
console.log(foo.parentElement);
console.log(foo.firstElementChild);
console.log(foo.lastElementChild);

// Zadanie 2
function clicker(id) {
    const element = document.getElementById(id);

    element.addEventListener('click', (el) => {
        console.log(el.target.textContent);
    });
}

clicker('ex2');

// Zadanie 3
const ex3 = document.querySelectorAll('#ex3 > div');

ex3.forEach(el => {
    el.addEventListener('click', (item) => {
        const sibling = item.target.nextElementSibling;

        if (sibling.style.display === 'none') {
            sibling.style.display = 'block';
        } else {
            sibling.style.display = 'none';
        }
    });
});

// Zadanie 4

ex3.forEach(el => {
    el.addEventListener('click', (item) => {
        const parent = item.target.parentElement;
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        parent.style.backgroundColor = color;
    });
});

// Zadanie 5

const ex5 = document.querySelectorAll('#ex5 > div'),
    listElement = document.querySelectorAll('#ex5 li');


// Add indexOf method to NodeList
NodeList.prototype.indexOf = Array.prototype.indexOf;

ex5.forEach(el => {
    el.addEventListener('mouseenter', (item) => {
        target = item.target;
        // 1)
        //listElement[0].style.backgroundColor = target.style.backgroundColor;
        
        // 2)
        //listElement[listElement.length - 1].style.backgroundColor = target.style.backgroundColor;
        
        // 3)
        /* listElement.forEach(el => {
            if (listElement.indexOf(el) % 2 !== 0) {
                el.style.backgroundColor = target.style.backgroundColor;
            }
        }); */
        
        // 4)
        /* listElement.forEach(el => {
            el.style.backgroundColor = target.style.backgroundColor;
        }); */

        // 5)
        target.parentElement.lastElementChild.style.backgroundColor = target.style.backgroundColor;
    });
});

// Zadanie 6

const ex6 = document.getElementById('ex6'),
    t1 = ex6.firstElementChild.firstElementChild.firstElementChild, // 1
    t2 = ex6.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement, // 2
    t3 = ex6.parentElement.firstElementChild.parentElement.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild; // 3

console.log(t1);
console.log(t2);
console.log(t3);




// Add indexOf method to NodeList
NodeList.prototype.indexOf = Array.prototype.indexOf;

// Zadanie 1
/* const el = document.createElement('div');

el.textContent = 'To jest nowy element';
document.body.append(el); */


// Zadanie 2
/* const el = document.createElement('ul'),
    arr = ['banan', 'melon', 'czeresznia', 'ananas', 'pomidor', 'kokos'];

arr.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    el.append(li);
});

document.body.append(el);

// Zadanie 3
el.addEventListener('click', (item) => {
    const li = el.querySelectorAll('li'),
        arr = [];
    li.forEach(el => {
        if (li.indexOf(el) % 2 === 0) {
            arr.push(el);
        }
    });
    arr.forEach(el => {
        el.remove(el)
    });
}); */


// Zadanie 4
/* const btn = document.createElement('button');

btn.textContent = 'Click me';
document.body.append(btn);

btn.addEventListener('click', () => {
    document.body.remove(btn);
}); */


// Zadanie 5
/* function divCreator(num) {
    for (i = 1; i <= num; i++) {
        const div = document.createElement('div');

        div.textContent = `to jest div numer ${i}`;
        document.body.append(div);
    }
}
divCreator(8); */
// Posible to add random number with Math.flor(Math.random());
// But this way look better;


// Zadanie 6
/* const div1 = document.createElement('div'),
    div2 = document.createElement('div'),
    div3 = document.createElement('div'),
    span1 = document.createElement('span'),
    span2 = document.createElement('span');

div1.textContent = 'to jest div';
span1.textContent = 'to jest span';
div3.textContent = 'to jest div';
span2.textContent = 'to jest span';
div2.append(div3);

document.body.append(div1);
document.body.append(span1);
document.body.append(div2);
document.body.append(span2); */


// Zadanie 7
/* const ul1 = document.createElement('ul'),
    ul2 = document.createElement('ul'),
    btn1 = document.createElement('button'),
    btn2 = document.createElement('button'),
    arr = ['banan', 'melon', 'czeresznia', 'ananas', 'pomidor', 'kokos'];

arr.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    ul1.append(li);
});

btn1.textContent = 'Move last element';
btn2.textContent = 'Move last element';
ul1.style.border = '1px solid black';
ul1.style.width = '100px';
ul2.style.border = '1px solid red';
ul2.style.width = '100px';

document.body.append(ul1);
document.body.append(btn1);
document.body.append(ul2);
document.body.append(btn2);

const btns = document.querySelectorAll('button');

function mover(btn, donorList, recipientList) {
    btn.addEventListener('click', () => {
        donorList.append(recipientList.lastElementChild);
        if (recipientList.childNodes.length === 0) {
            btn.disabled = true;
        } else {
            btns.forEach(el => {
                el.disabled = false;
            });
        }
    });
}

mover(btns[0], ul2, ul1);
mover(btns[1], ul1, ul2); */


// Zadanie 8
/* const form = document.createElement('form'),
    input = document.createElement('input'),
    submit = document.createElement('button');

form.textContent = `Wpisz jaki element chcesz utworzyć, 
z jakim tekstem, z kolorem tekstu 
i ile razy ma być ten element powtórzony na stronie.`;
form.style.width = '300px';
input.placeholder = 'Use ; separator';
submit.textContent = 'Utwórz';
form.append(input);
form.append(submit);
document.body.append(form);

submit.addEventListener('click', (item) => {
    item.preventDefault();

    const param = input.value.split('; '),
        count = +param[3],
        color = param[2],
        tekst = param[1];

    for (i = 0; i < count; i++) {
        const elelement = document.createElement(param[0]);

        elelement.textContent = tekst;
        elelement.style.color = color;

        document.body.append(elelement);
    }

    input.value = '';
}); */


// Zadanie 9
const form = document.createElement('form'),
    submitBtn = document.createElement('button'),
    newInputRaw = document.createElement('button'),
    inputNameVal = ['name', 'surename', 'age', 'children'];

for (i = 0; i < inputNameVal.length; i++) {
    const input = document.createElement('input'),
        deleteBtn = document.createElement('div');

    deleteBtn.textContent = 'Delete';
    input.required = true;
    input.name = inputNameVal[i];
    input.placeholder = inputNameVal[i].charAt(0).toUpperCase() + inputNameVal[i].slice(1);
    form.append(input);
    form.append(deleteBtn);
}

newInputRaw.textContent = 'More';
submitBtn.textContent = 'Utwórz';
submitBtn.type = 'submit';
form.style.margin = 'auto';
form.style.width = '165px';
form.style.border = '1px solid black';

form.append(newInputRaw);
form.append(submitBtn);

document.body.append(form);

newInputRaw.addEventListener('click', item => {
    item.preventDefault();
    const newInput = document.createElement('input');
    newInput.name = 'other';
    newInput.placeholder = 'Other';
    newInputRaw.before(newInput);
});

form.addEventListener('submit', item => {
    item.preventDefault();

    const formData = new FormData(form);
    dataObj = Object.fromEntries(formData.entries());

    const newTable = document.createElement('table'),
        keyLine = document.createElement('tr'),
        valueLine = document.createElement('tr');

    for (key in dataObj) {
        const newKey = document.createElement('th'),
            newValue = document.createElement('th');

        newKey.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        newValue.textContent = dataObj[key];

        newKey.style.border = '1px solid black';
        newValue.style.border = '1px solid black';

        keyLine.append(newKey);
        valueLine.append(newValue);
    }

    newTable.append(keyLine);
    newTable.append(valueLine);
    newTable.style.margin = 'auto';
    newTable.style.border = '1px solid black';

    document.body.append(newTable);

    form.reset();
});
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

// Add indexOf method to NodeList
NodeList.prototype.indexOf = Array.prototype.indexOf;

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
function divCreator(num) {
    for (i = 1; i <= num; i++) {
        const div = document.createElement('div');

        div.textContent = `to jest div numer ${i}`;
        document.body.append(div);
    }
}
divCreator(8);
// Posible to add random number with Math.flor(Math.random());
// But this way look better;

// Zadanie 6
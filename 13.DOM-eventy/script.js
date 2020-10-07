// Zadanie 1
/* 
const testEvent = document.getElementById('test-event');

// 1)
testEvent.addEventListener('click', (item) => {
    console.log(item);
    console.log(item.target);
});

// 2)
testEvent.addEventListener('mousemove', (item) => {
    console.log(item);
}); 

// 3)
testEvent.addEventListener('mouseenter', (item) => {
    console.log(item);
    console.log(item.target);
});

// 4)
document.addEventListener('keydown', (item) => {
    console.log(item.code);
});

// 5)
document.addEventListener('scroll', (item) => {
    console.log(item);
});

// 6)
document.getElementById('input-test').addEventListener('input', (item) => {
    console.log(item);
});
*/

// Zadanie 2
/*
const ex2 = document.getElementById('ex2');


ex2.addEventListener('click', (item) => {
    ex2.nextElementSibling.textContent = item.target.getAttribute('data-text');
});
*/

// Zadanie 3
/*
const redBtn = document.getElementById('ex3');

redBtn.addEventListener('mouseleave', (item) => {
    item.target.style.backgroundColor = 'red';
}); 

redBtn.addEventListener('mouseenter', (item) => {
    item.target.style.backgroundColor = 'blue';
});
*/

/*
// Zadanie 4
const ex4 = document.getElementById('input-test'),
    alert = document.createElement('div');

alert.classList = 'alert';
alert.textContent = `You can't input a number here!`;

ex4.addEventListener('input', (item) => {
    const target = item.target;
    alert.remove();
    target.style.border = '';
    if (target.value.match(/\d/g)){
        ex4.parentElement.append(alert);
    }
});
*/


// Zadanie 5
//const ex5 = document.getElementById('ex5-button');
// Brak danego elementu na stronie

// Zadanie 6

/* 
document.addEventListener('scroll', (item) => {
    console.log(window.pageYOffset);
    if(window.pageYOffset > 200){
        document.querySelector('body').style.backgroundColor = 'red';
    } else {
        document.querySelector('body').style.backgroundColor = '';
    }
}); 
*/

// Zadanie 7

const calculator = document.getElementById('calculator'),
    textArea = calculator.querySelector('input'),
    symbols = calculator.querySelectorAll('button');
let lastNumber = 0,
    currentNumber = 0,
    counter = '',
    lastOperator = '';

textArea.value = '';

symbols.forEach((el) => {
    el.addEventListener('click', item => {
        const target = item.target,
            val = parseInt(target.textContent);

        if (!isNaN(val)) {
            counter += val;
            textArea.value = counter;
        } else {
            if (lastNumber === 0 && currentNumber === 0) {
                lastNumber = parseInt(textArea.value);
            } else {
                currentNumber = Math.floor(calculate(lastOperator, lastNumber, parseInt(textArea.value)))
                lastNumber = currentNumber;
            }
            lastOperator = target.textContent;
            counter = '';
            textArea.value = currentNumber;
        }
    });
});

function calculate(symbol, a, b) {
    switch (symbol) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return a;
    }
}
// Zadanie 1
class Persone {
    constructor(name, surename, age, country, language) {
        this.name = name;
        this.surename = surename;
        this.age = age;
        this.country = country;
        this.language = language;
    }

    ageChanger(value) {
        this.age = value;
    }

    countryChanger(val) {
        this.country = val;
    }
}

const ivan = new Persone('Ivan', 'Kokla', 25, 'Poland', 'Polish');
const iola = new Persone('Iola', 'Dzierban', 35, 'Poland', 'Polish');
const janek = new Persone('Janek', 'Kokla', 75, 'Poland', 'Polish');
const pioter = new Persone('Pioter', 'Liks', 28, 'Poland', 'Polish');
const lola = new Persone('Lola', 'Jaszkewicz', 85, 'Poland', 'Polish');

ivan.ageChanger(26);
ivan.countryChanger('UK')
console.log(ivan);
iola.ageChanger(75);
iola.countryChanger('USA')
console.log(iola);
janek.ageChanger(61);
janek.countryChanger('Italy')
console.log(janek);
lola.ageChanger(13);
lola.countryChanger('UA')
console.log(lola);

// Zadanie 2
class Calculator {
    constructor() {
        this.ram = [];
    }

    sum(a, b) {
        const result = a + b;
        this.ram.push([`${a} + ${b} = ${result}`])
        console.log(result);
    }

    subtract(a, b) {
        const result = a - b;
        this.ram.push([`${a} - ${b} = ${result}`])
        console.log(result);
    }

    multiply(a, b) {
        const result = a * b;
        this.ram.push([`${a}*${b} = ${result}`])
        console.log(result);
    }

    divide(a, b) {
        const result = a / b;
        this.ram.push([`${a}/${b} = ${result}`])
        console.log(result);
    }

    operationList(){
        this.ram.forEach(el =>{
            console.log(el);
        });
    }

    listCleaner(){
        this.ram = [];
    }
}

const calc = new Calculator();
calc.sum(8, 9);
calc.divide(27, 3);
calc.operationList();
calc.listCleaner();
calc.operationList();

const calc2 = new Calculator();
calc.multiply(8, 9);
calc.subtract(27, 3);
calc.operationList();
calc.listCleaner();
calc.operationList();


// Zadanie 3
class Game {
    constructor() {
    }

    getRandom() {
        Game.prototype.timer = setInterval(() => {
            Game.prototype.number = Math.round(Math.random() * 10);
            console.log(Game.prototype.number);
        }, 1000);
    }

    checker() {
        Game.prototype.timechecker = setInterval(() => {
            if (Game.prototype.number > 5) {
                console.log('Game closed');
                clearInterval(this.timer);
                clearInterval(this.timechecker);
            }
        }, 1000);
    }
}

const test = new Game;
const test2 = new Game;
test.getRandom();
test2.checker();

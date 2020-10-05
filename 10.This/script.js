// Zadanie 1
class Person {
    constructor(name, surename, age, country, city, food = []) {
        this.name = name,
            this.surename = surename,
            this.age = age,
            this.country = country,
            this.city = city,
            this.food = food;
    }

    allInfo() {
        console.log(`Name: ${this.name} ${this.surename}, age: ${this.age}, 
        country: ${this.country}, city: ${this.city}`);
    }

    getOlder() {
        this.age++;
    }
}

const person = new Person('Ivan', 'Kozlow', 27, 'Urugvai', 'Guguka', ['Kielbasa', 'Żurek']),
    person2 = new Person('Ilia', 'Popow', 28, 'UA', 'Odesa', ['Borszcz', 'Pelmeni']);

person2.getOlder();
person.getOlder();

// console.log('One year latter: ');
// console.log(person2);
// console.log(person);

// console.log('One year latter: ');
// console.log(person2);
// console.log(person);

// Zadanie 2
Person.prototype.addFood = function(food) {
    this.food.push(food);
};
Person.prototype.lovedFood = function() {
    console.log(this.food);
};

person2.lovedFood();
person2.addFood('Croisant');
person2.lovedFood();


// Zadanie 3
const calculator = {

    input: function(a, b){
        this.a = a;
        this.b = b;
    },

    sum: function(){
        console.log(this.a + this.b);
    },

    subtract: function(){
        console.log(this.a - this.b);
    },

    multiply: function(){
        console.log(this.a * this.b);
    },

    divide: function() {
        this.b === 0 ? console.log("Can't divide by 0!") : console.log(this.a / this.b);
    }
};

calculator.input(6, 0);
calculator.sum();
calculator.subtract();
calculator.multiply();
calculator.divide();


// Zadanie 4

const move = {

    position: function(){
        if(this.location === undefined){
            this.up();
        } else if(this.location === 'up'){
            this.down();
        } else{
            this.up();
        }
    },

    up: function(){
        for(let i = 0; i <= 5; i++){
            if ( i === 0 ){
                console.log(`I'm down`);
            } else if(i === 5){
                console.log(`I'm up`);
                this.location = 'up'; 
            } else {
                console.log(`I'm ${i} stair`);
            }
        }
    },

    down:function(){
        for(let i = 5; i >= 0; i--){
            if ( i === 0 ){
                console.log(`I'm down`);
                this.location = 'down'; 
            } else if(i === 5){
                console.log(`I'm up`);
            } else {
                console.log(`I'm ${i} stair`);
            }
        }
    }
};

move.position();
move.position();
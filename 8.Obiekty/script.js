// Zadanie 1
const car = {
    model: 'Tesla',
    yearOfProduction: 2005
};

console.log(car.model);
console.log(car.yearOfProduction);

// Zadanie 2
car.modelChabger = function (model = " ") {
    this.model = model;
};
car.modelChabger('Prius');
console.log(car.model);

// Zadanie 3
const calculator = {
    total: 0,
    arraySum : function(arr = []){
        const sum = arr.reduce((a, b) => a + b, 0);
        this.total += sum;
            
    }
};
calculator.arraySum([1, 4, 6, 2]);
calculator.arraySum([1, 4, 6, 2]);

console.log(calculator.total);

// Zadanie 4
const bmw = {
    name: 'BMW',
    age: 17,
    km: 100000,
    price: 10000
};

Object.keys(bmw).forEach(el => {
    console.log(`${el}: ${bmw[el]};`)
});

// Zadanie 5
const anotherCar = {
    name: 'Porche',
    age: 27,
    owners: {
        first: 'Kukumba',
        sec: 'Bill Gates',
        thirst: 'IT'
    }
};

console.log(anotherCar.owners.first);
console.log(anotherCar.owners.thirst);

// Zadanie 6
anotherCar.km = 10000;
anotherCar.aI = function(){
    console.log('Hello');
};

anotherCar.aI();
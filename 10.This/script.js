// Zadanie 1
class Person{
    constructor(name, surename, age, country, city, food = []){
        this.name = name,
        this.surename = surename,
        this.age = age,
        this.country = country,
        this.city = city,
        this.food = food;
    }
    
    allInfo(){
        console.log(`Name: ${this.name} ${this.surename}, age: ${this.age}, 
        country: ${this.country}, city: ${this.city}`);
    }

    getOlder(){
        this.age++;
    }

    // Zadanie 2
    lovedFood(){
        console.log(this.food);
    }

    addFood(food){
        this.food.push(food);
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
Person.prototype.addFood = function(){
    
}
person2.lovedFood();
person2.addFood('Croisant');
person2.lovedFood();
// Zadanie 1
function succes() {
    console.log('Udało się!');
}
succes();

// Zadanie 2
function param(a) {
    console.log(`Parametr: ${a}`);
}
param(5);

// Zadanie 3
const array = (a = []) => a;
const returnArray = array([2, 5, 6, 3]);

console.log(returnArray);

// Zadanie 4
function strPrinter(str = ""){
    
    let counter = 5;
    const timer = setInterval(() => {
            if(counter > 0){
                console.log(str);
                counter--;
            } else {
                console.log('Koniec');
                clearInterval(timer);
            }
        }, 3000);
}

strPrinter('pipka');
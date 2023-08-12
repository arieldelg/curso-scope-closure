//variables

var a; // declarando
var b = 'b' // declaramos / asignamos
b = 'bb' // reasignacion
var a = 'aa' // redeclaracion

//Global Scope

var fruit = 'apple' // Global

const bestFruit = () => {
    console.log(fruit);
}
bestFruit();


const countries = () => {
    country = 'Mexico'; // aqui se esta declarando como variable global, en vez de local, hay que tener cuidado con las variables sin declarar
    console.log(country);
}
countries();
console.log(country);
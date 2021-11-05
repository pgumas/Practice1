/* class Person {
    constructor (height, weight, first, last, age) {
        this.height = height;
        this.weight = weight;
        this.first = first;
        this.last = last;
        this.age = age;
    }
}

let personOne = new Person(6, 150, 'Peter', 'Gumas', 30);
console.log(personOne); */

/* let cart = ['oranges', 'banananas', 'grapes', 'apples', 'soda', 'milk', 'tv', 'radio', 'clothes']; */
let cart = [
    {
        fruits: 'oranges, banananas, grapes', 
        clothes: 'pants, shirts'
    },
    {
        drinks: 'soda, milk',
    },
    {
        electronics: 'tv, radio',
    }
]

let fruits = cart[0, 1, 2, 3];

/* let drinks = cart  */

/* items = ['tomatos', 'pepper']; */
/* 
console.log(cart[0]); */

console.log(cart[0].clothes);




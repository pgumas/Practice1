/* var car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function() {

        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription(); */

/* function first() {
    return this;

}

console.log(first() === global); */

// this is Node's global object
// because that's where the 
// first methos was called.
/* 
function second() {
    'use strict';
    
    return this;
}

console.log(second() === global);
console.log(second() === undefined); */

// this depends on HOW a function is called

// An object can be passed as the first argument to call
// or apply and this will be bound to it. 

/* let myObject = { value: 'My Object' };

// value is set on the global object
global.value = 'Global object'; */

/* function third(name) {
    // Returns something different depending on how
    // we called this method:
    return this.value + name; */
/* } */

// console.log(third());


// Both call and apply allow you to explicityly set
// what you want to represent 'this'. The difference
// is in how additional arguments to the function
// are sent. 



/* 

console.log(third.call(myObject, 'bob'));
console.log(third.apply(myObject, ['bob'])); */


function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'bob',
    lastName: 'tabor',
    print: fifth
}

let customer2 = {
    firstName: 'peter',
    lastName: 'gumas',
    print: fifth
}

customer2.print();
customer1.print();





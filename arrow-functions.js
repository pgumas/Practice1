/* let hi = () => { console.log('howdy'); }

hi(); */

/* let hi = (name) => { console.log(`howdy ${name}`)};
hi('bob'); */

/* let add = (a, b) => { return a+ b};
console.log(add(7, 3)); */

let names = [ 'david', 'eddie', 'alex', 'michael' ];
/* names.map( (names) => { console.log(`howdy ${names}!`)}); */
/* let i = 0;
names.map((names) => { i++; console.log(`howdy ${names} ${i}!`);}); */

var transformed = names.map((names) => { return (`howdy ${names}`)});
console.log(transformed);
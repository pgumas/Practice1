function sayHello(name){
    return function() {
        console.log('howdy ' + name);
    }
}

let bob = sayHello('bob');
let peter = sayHello('peter');
let mark = sayHello('mark');

bob(); 
peter();
mark();

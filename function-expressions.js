/*
setTimeout(function () {
    console.log('I waited 2 seconds'); 
    }, 2000);
*/

/*
let counter = 0;
function timeout() {
    setTimeout(function () {
        console.log('hi ' + counter++);
        timeout()
    }, 2000);
    }

    timeout();
    // ctrl + c
*/

/*
setTimeout(function () {
    console.log('Peter is awesome');
}, 5000);
*/

let counter = 0;
function timeout() {
    setTimeout(function () {
        console.log('Peter is awesome ' + counter++);
        timeout()
    }, 5000);
}

timeout();



/*
(function () {
    console.log('Immediately Invoked Function Expression');
})();
*/

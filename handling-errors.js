// let a = 7 * undefined / "panama";
//console.log(a);

function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b);
    console.log('If the previous line of code throws an exception you\'ll never see this.');
}

/* beforeTryCatch();

function afterTryCatch() { 
    try {
        let obj = undefined;
        console.log(obj.b);
        console.log('If the previous line of code throws an exception you\'ll never see this.');
    } catch (error) {
        console.log('I caugh an exception: ' + error.message);

    } finally {
        console.log('This will happen no mattter what.');
    */

 //   }

 //   console.log('My application is still running');

//}

//afterTryCatch();

function perform calculation(obj) {
    if (!obj.hasownProperty('b')) {
        throw new Error('Object missing property');
    }
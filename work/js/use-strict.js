//console.log(x);
x=5;
console.log(x); // no eror

function sayHello() {
    'use strict';
    str='Hello World!';
    console.log(str); // it will give error because of 'use strict'
}

sayHello();

// if there is no 'use strict', then variable value can be accessed after initialization but not before.
// if there is 'use script', then variable value can't be accessed even after initialization.
// Note : var keyword is not used, if var keyword is used then there is no point in using 'use strict'.
document.getElementById('result').innerHTML+=val;
document.getElementById('result').innerHTML+=sayHi();

var val='Its me!';
document.getElementById('result').innerHTML+=val;

function sayHi() {
    return '<br>Hi! This function is hoisted.<br>';
}
document.getElementById('result').innerHTML+=sayHi();
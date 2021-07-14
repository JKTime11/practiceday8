const btn=document.getElementById('btn1');
const btn3=document.getElementById('btn3');

function sayHello() {
    document.getElementById('result').innerHTML='Hi, How are you! #1';
}

function saySomething() {
    document.getElementById('result').innerHTML='Hi, How are you! #2';
}

function sayHi() {
    document.getElementById('result').innerHTML='Hi, How are you! #3';
}

function setHoverColor() {
    btn.style.background='yellow';
}

function setNormalColor() {
    btn.style.background='';
}

btn.addEventListener('click', sayHello);
btn.addEventListener('mouseover', setHoverColor);
btn.addEventListener('mouseout', setNormalColor);

btn3.onclick=sayHi; // it should not be called i.e. no ()
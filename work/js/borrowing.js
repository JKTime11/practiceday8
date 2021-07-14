var obj1={
    name: 'obj1',
    say: function(greet) {
        document.getElementById('result').innerHTML+=`${greet} ${this.name}!<br>`;
    }
}
obj1.say('Hi');

var obj2={
    name: 'obj2'
}

obj1.say.call(obj2, 'Hello');
function showTagName() {
    document.getElementById('result').innerHTML+=`Capturing ${this.tagName} tag<br>`;
}

const elems=document.querySelectorAll('div, p, span');

for(let e of elems) {
    e.addEventListener('click', showTagName, true);
}
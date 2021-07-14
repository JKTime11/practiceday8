function calculate() {
    document.getElementById('result').innerHTML=
    `Math.sqrt(56) : ${Math.sqrt(56)}<br> 
    Math.ceil(56.7) : ${Math.ceil(56.7)}<br>
    Math.floor(56.5) : ${Math.floor(56.5)}<br> 
    Math.pow(5, 4) : ${Math.pow(5, 4)}<br>
    Math.min(56, 7, 37) : ${Math.min(56, 7, 37)}<br> 
    Math.max(5, 63, 81) : ${Math.max(5, 63, 81)}<br>
    Math.clz32(81) : ${Math.clz32(81)}<br>
    Math.trunc(-81.67) : ${Math.trunc(-81.67)}`;
}
function calcHyp() {
    const input=document.querySelectorAll('body>input');
    const hypotenuse=Math.sqrt(Math.pow(input[0].value, 2)+Math.pow(input[1].value, 2));
    document.getElementById('result').innerHTML=`Hypotenus of the triangle : ${hypotenuse}`
}
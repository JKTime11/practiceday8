const timing = ()=>{
    const d=new Date();
    const hr=d.getHours();
    let period;
    if(hr>12) {
        hr-=12;
        period='PM';
    }
    else if(hr<12) {
        period='AM';
    }
    else {
        period='PM';
    }
    document.getElementById('result').innerHTML=hr+":"+d.getMinutes()+" "+period;
}


// increment is an arrow function
// if there is only one statement then return keyword and parenthesis are not required.
// if there is single parameter then initial () are not required.
const increment = x=>x+1;

const multiply = (x, y)=>x*y;

document.getElementById('increment').addEventListener('click', ()=>{
    const val=+document.querySelector('input').value;
    document.getElementById('result2').innerHTML='Incremented value is '+increment(val);
})

document.getElementById('multiply').addEventListener('click', ()=>{
    const val1=+document.querySelector('#input1').value, val2=+document.querySelector('#input2').value;
    document.getElementById('result3').innerHTML=`Multiplication of ${val1} and ${val2} is ${multiply(val1, val2)}`;
})
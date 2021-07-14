function convert() {
    document.getElementById('result').innerHTML=
    `Number('6') : ${Number('6')}<br> 
    Number(true) : ${Number(true)}<br>
    Number(false) : ${Number(false)}<br> 
    Number('') : ${Number('')}<br>
    Number('0') : ${Number('0')}<br>
    Number(null) : ${Number(null)}<br>
    Number(undefined) : ${Number(undefined)}<br>
    Number('hmm') : ${Number('hmm')}<br>
    <br>
    String(6) : ${String(6)}<br> 
    String(true) : ${String(true)}<br>
    String(false) : ${String(false)}<br> 
    String(0) : ${String(0)}<br>
    String(null) : ${String(null)}<br>
    String(undefined) : ${String(undefined)}<br>
    <br>
    Boolean(6) : ${Boolean(6)}<br> 
    Boolean('') : ${Boolean('')}<br>
    Boolean('yes') : ${Boolean('yes')}<br> 
    Boolean(0) : ${Boolean(0)}<br>
    Boolean(null) : ${Boolean(null)}<br>
    Boolean(undefined) : ${Boolean(undefined)}<br>`
}
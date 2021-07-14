function datentime() {
    const d=new Date();
    document.getElementById('result').innerHTML=
    'toString : '+d.toString()+'<br>'+
    'toDateString : '+d.toDateString()+'</br>'+
    'toISOString : '+d.toISOString()+'<br>'+
    'toLocaleString : '+d.toLocaleString()+'</br>'+
    'toLocaleDateString : '+d.toLocaleDateString()+'</br>'+
    'toLocaleTimeString : '+d.toLocaleTimeString()+'</br>'+
    'toTimeString : '+d.toTimeString()+'</br>'+
    'toUTCString : '+d.toUTCString();
}
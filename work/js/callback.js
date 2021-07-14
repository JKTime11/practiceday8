function learn() {
    document.getElementById('result').innerHTML="Learning Async JS"
}

function printAfterOneSec(callback) {
    setTimeout(callback, 1000);
}
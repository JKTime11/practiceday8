// json in single line
var json = '{"book": {"name": "Harry Potter","author": "J.K. Rowling","year": 2000,"bestseller": true}}';

// json in multiple lines
var json1 = `{
    'book': {
        'name': "Harry Potter",
        "author": "J.K. Rowling",
        "year": 2000,
        "bestseller": true
    }
}`;
var json2 = "{'book': {'name': 'Harry Potter','author': 'J.K. Rowling','year': 2000,'bestseller': true}}";
// in json, every key should be enclosed in quotes
// whole json object should be a string
console.log(typeof json1)
var obj=JSON.parse(json);
console.log(typeof obj);
console.log(json);
console.log(json1);
console.log(json2);
console.log(obj);
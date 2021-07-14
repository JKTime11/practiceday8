const obj={
    book: {
        author: "J.K. Rowling",
        bestseller: true,
        name: "Harry Potter",
        year: 2000
    }
}

const json=JSON.stringify(obj);

console.log(typeof obj);
console.log(obj);
console.log(typeof json);
console.log(json);
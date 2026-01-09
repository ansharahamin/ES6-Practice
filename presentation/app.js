// Primitive vs Reference Data Types

// Primitive Data Types: number, string, boolean, null, undefined, symbol, bigint
// Reference Data Types: objects, arrays, functions

let num = 10;
let num2 = num;
num2 += 5;
console.log(num);
console.log(num2);


let a = [1,2,3,4,5];
let b = a
b.push(6);
console.log(a);
console.log(b);

let c = {
    name: "Alice",
    age: 30
}
let d = c;
d.age = 31;
console.log(d);
console.log(c);

//shallow Copy 
//spread operator
let arr1 = [1,23,4,5];
let arr2 = [...arr1];
arr2.push(6);
console.log(arr1);
console.log(arr2);


// obj.assign
let obj1 ={
    name: "Bob",
    age: 25
}
let obj2 = Object.assign({}, obj1);

obj2.age = 26;
console.log(obj1);
console.log(obj2);

//deep copy
let original = {
    name: "charlue",
    address: {
        city:"new york",
        zip: 10001
    }
}

let copy1 = {...original,address:{...original.address}};
copy1.address.city = "san francisco";
console.log(original);
console.log(copy1);


    // let copy = JSON.parse(JSON.stringify(original));
    // copy.address.city = "los angeles";
    // console.log(original);
    // console.log(copy);
// let obj = { name: "ansharah", age: 20, city: "karachi" };
// let { name, age, city } = obj;
// console.log(name);

// let obj = { name: "ansharah", age: 20, city: "karachi" , country: "Pakistan"};
// let { name, age, ...address } = obj;
// console.log(address);

// function sum(...numbers){ // rest operator
//     let result = 0;
//     for (let nums of numbers){
//         result += nums;
//     }
//     return result;
// }

// console.log(sum(1,2,3,4,5));
// let arr = [1,2,3,4,5]; // spread operator
// console.log(sum(...arr));

// let arr = [1,2,[3,4],[5,6]];
// let [a,b , ...rest] = arr;
// console.log(rest);

// let arr = [1,2,[3,4],[5,6]];
// let [a,b ,[c,d]] = arr;
// console.log(d);

// let obj = {
//     name: "ansharah",
//     age: 20,
//     address: {
//         city: "karachi",
//         country: "Pakistan"
//     }
// };
// let {name , age , ...address } = obj;
// console.log(address);

//obj in object destructuring with rest operator
// let obj = {
//     name: "ansharah",
//     age: 20,
//     address: {
//         city: "karachi",
//         country: "Pakistan"
//     }
// };
// let {name , age ,address:{city,country}} = obj;
// console.log(city);
// console.log(country);

// Enhance object literals

// let name = "ansharah";
// let age = 20;
// let city = "karachi";
// let person = {name,age,city};
// console.log(person);

// let name = "ansharah";
// let age = 20;
// let city = "karachi";
// let person = {name,age,city};
// console.log(person);

// Arrow Functions
// let greet = () => "welcome " + " Ansharah";
// console.log(greet());

// let greet1 = user => "welcome " + user;
// console.log(greet1("ansharah"));

// let sum = (a,b = 5) => a+b
// console.log(sum(2));

// let sqr = (a) => a*a
// console.log(sqr(2));

class AdmissionForm  {
    clearForm(){
console.log(`this form is submitted`);
    }
    SubmitForm(){
        console.log(`this form is submitted`);

    }
    fill(){
        console.log(`this form is filled`);

    }
} 
let umra = new AdmissionForm()
let sara = new AdmissionForm()
umra.clearForm("umra ",5)
umra.SubmitForm("sara ",6)
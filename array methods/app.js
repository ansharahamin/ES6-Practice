//maps

// let num = [1,2,3,45,67]
// // syntax 
// // num.map(function(element,index,array) {
// //     return newValue
// // })

// let mapmethod = num.map((element)=>{
//     return element+10
// })
// console.log(mapmethod);

// let names = ["ali", "sara", "ahmed"];
// let mapsmethod =  names.map((element)=>{
//     return element.toUpperCase()
// })
// console.log(mapsmethod);

// let students = [
//   { name: "Ali", marks: 80 },
//   { name: "Sara", marks: 90 },
//   { name: "Ahmed", marks: 70 }


// ];

// let mapsmethod =  students.map((element)=>{
//     return{
// ...element,
// isadult : element.marks >=75 ? true :false
//     } 
// })
// console.log(mapsmethod);

let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 }
];
let mapsmethod =  products.map((element)=>{
    return element.price
})
console.log(mapsmethod);
// function iteratorFunc(val){
//     let nextIndex = 0
//     return{
//         next(){
//             if (nextIndex<val.length) {
//                  return{
//              value : val[nextIndex++],
//              done : false
//             }
//             }else{
//                 return{
//                   value : val[nextIndex++],
//                      done : true
//                 }
    
//             }
           
//         }
//     }
// }

// //let arr =[1,2,3,4,5]
// let arr = ["Ansharah","Umra","Sheema"]
// let itret = iteratorFunc(arr)
// console.log(itret.next());
// console.log(itret.next());
// console.log(itret.next());
// console.log(itret.next());
// console.log(itret.next());
// console.log(itret.next());


// Iterator Object 

// let Iterator = {
//     counter : 0,
//     next(){
//         return{
//            value : this.counter++,
//            done: this.counter >= 10
//         }
//     }

// }

// let iter = Iterator.next() 
// console.log(iter.value);
// while(!iter.done){
// iter = Iterator.next()
// console.log(iter.value);

// }

//symbol
// let numbers = [1,2,3,4,5]
// let str = ["a","b"]
// let iter = numbers[Symbol.iterator]()
// let iterchr = str[Symbol.iterator]()

// // console.log(iter.next().value);
// // console.log(iter.next().value);
// // console.log(iter.next().value);
// // console.log(iter.next().value);

// for (let num of numbers) {
//     console.log(num);
    
// }
// for (let char of str) {
//     console.log(str);
    
// }

//Generators

// function *generatorFunc(){
//     console.log(1);
//     console.log(2);
//     yield "yeild1"
//     console.log(3);
//     console.log(4);
//         yield "yeild2"

//     console.log(5);
//     yield "yeild3"
    
// }

// let g = generatorFunc()
// console.log(g.next());
// console.log("Hello");
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


let fruits =["apple","banana"]
function iterator(value) {
    let index = 0
    return{
        next(){
            if(nextIndex<value.length){

            }
    }
}
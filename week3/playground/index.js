/// call back func

// function funA(){
//     console.log("function a")
//     funB()
// }
// function funB(){
//     console.log("function b")
// }

// const arrowFunc = (X) = {
// }

/// Array esS-es6

// const fuitArray = ["apple","mango","coco"]

// fuitArray.push("orange")
// fuitArray.pop()

// fuitArray.unshift("orange")
// fuitArray.shift()

// fuitArray.map((index,data)=>{
    // console.log(index,data);
// })

// const filter = fuitArray.filter((value)=>{
//     if(value !== "apple"){
//         return value;
//     }
// })

// const numberArr = [1,2,3,4,5]

// const sum = numberArr.reduce((prev,value)=>{
//     prev += value
//     return prev
// },0)

// console.log(sum);

/// object

// const ojA = {
//     name:"Caca",
//     age:20
// }
// const ojB = {
//     name:"Rod",
//     age:21
// }
// console.log(ojA);

// console.log(Object.keys(ojA));
// console.log(Object.values(ojA));

// const arrStr1 = ["a","b","c"]
// const arrStr2 = ["x","y","z"]

// arrStr1.push(...arrStr2)
// console.log(arrStr1);

// const {name,age} = ojA
// console.log(name);

/// async await & API

// const axios = require("axios")
// const fetchApi = async () =>{
//     const {data} = await axios.get('https://icat-trainee-api.onrender.com/getData')
//     console.log(data);
// }
// fetchApi()
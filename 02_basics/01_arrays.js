
const myArr = [0,1,2,3,4]
const myHeros = ["Shakitman","naagraj"]
const myArr2 = new Array(1,2,3,4);

console.log(myArr[0]);

// Array methods
// myArr.push(6);
// console.log(myArr);

// myArr.push(6);
// myArr.push(7);

myArr.unshift(0);
// unshift 
myArr.shift();
// delete from start

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

console.log(myArr);

const newArr = myArr.join();
console.log(newArr);
// returns string


// slice and splice
console.log("A ",myArr);
const myn1 = myArr.slice(1,3)
console.log(myArr);

const myn2 = myArr.splice(1,3);
console.log(myArr);

console.log(myn1);
console.log(myn2);




//Arreglos en JS
// const arr = new Array(100);

const arr = [1,2,3,4];
// arr.push(1);
// arr.push(2);
// arr.push(3);

let arr2 = [ ...arr,5];
// arr2.push(5);
const arr3 = arr2.map( v => v * 2 );
console.log(arr);
console.log(arr2);
console.log(arr3);
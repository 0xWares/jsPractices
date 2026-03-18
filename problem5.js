// Convert an object which will convert to an array of arrays and will contain the key value pairs.

const obj = {a: 1, b:5};
const arr = Object.entries(obj); // Object.entries() return array of arrays.
console.log(arr);


// or

let res = [];

for(let key in obj){
  res.push([key, obj[key]]);
}
console.log(res);

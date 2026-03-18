// Capitalize the first word of a string...

const str = 'javascript is fun'

const res = str.charAt(0).toUpperCase() + str.slice(1);
console.log(res);

// or

let res1 = str[0].toUpperCase();

for(let i = 1; i < str.length; i++){
  res1 += str[i];
}
console.log(res1);


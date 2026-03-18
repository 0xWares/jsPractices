const str = 'I am wares, nice to meet you'

const res = str.split(' ').reverse().join(' ')
console.log(res);

// or

let res1 = str.split(" ");
let resReversed = [];
for(let i = res1.length -1; i >= 0; i--){
  resReversed.push(res1[i])

}

const finalResult = resReversed.join(' ');
console.log(finalResult);



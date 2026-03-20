const str = "hello world! I love programming..."
const result = str.split(" ").reduce((longest, current) => {
  return current.length > longest.length ? current : longest;

});
console.log(result);

// or

let words = str.split(" ");

let longest = words[0];

for(let w of words){
  if(w.length > longest.length){
    longest = w;
  }
}

console.log(longest);
console.log("Wares");

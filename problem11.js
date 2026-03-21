// check if a word is palindrom or not

const word = "Madam";

function isPal(w){
  let left = 0;
  let right = w.length - 1;
  while(left < right){
    if(w[left] !== w[right]){
    return false;
  };
  left++;
  right--
  }
  return true;
  
};

console.log(isPal(word.toLowerCase()));

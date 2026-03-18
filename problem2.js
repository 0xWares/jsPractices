// Event loop - microtask vs macrotask

console.log('Start');
setTimeout(function(){ // macro task executed second
  console.log('timeout');
  
}, 0); 
Promise.resolve().then(() => console.log('Promise')); // microtask executed first

console.log('end');


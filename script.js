// Capitalize the first letter of every word...

const str = 'hello there, my name is wares'

const res = str.split(' ').map(w => w[0].toUpperCase()+w.slice(1)).join(' ')
console.log(res);


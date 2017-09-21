let fs = require('fs');
let data = fs.readFileSync(process.argv[2]);
let new1 = data.toString();
let count = new1.split('\n').length - 1;
console.log(count);
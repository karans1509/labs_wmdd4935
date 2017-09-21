let num = process.argv;
let sum = 0;

for(let i = 2; i < num.length; i++) {
  sum += parseInt(num[i]);
}

console.log(sum);
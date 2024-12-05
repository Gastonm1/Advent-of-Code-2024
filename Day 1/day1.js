const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

let columns = input.split('\n');
let column1 = [];
let column2 = [];
for (let column of columns) {
  let [x, y] = column.split('  ');
  column1.push(Number(x));
  column2.push(Number(y));
}

// Part 1
// column1.sort((column1, column2) => column1 - column2);
// column2.sort((column1, column2) => column1 - column2);

// let diff = [];
// for (let i = 0; i < column1.length; i++) {
//   diff.push(Math.abs(column1[i] - column2[i]));
// }

// console.log(diff);

// console.log(diff.reduce((acc, val) => acc + val, 0))

console.log({ column1, column2 });
let sum = 0;
for (let num of column1) {
    let count = 0;
  for (let num2 of column2) {
    if (num === num2) count++;
  }
  sum += num * count;
}

console.log(sum);

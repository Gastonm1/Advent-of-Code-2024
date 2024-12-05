const fs = require('fs');

// function isSafeReport(report) {
//   const levels = report.split(' ').map(Number);
//   let isIncreasing = true;
//   let isDecreasing = true;

//   for (let i = 1; i < levels.length; i++) {
//     const diff = levels[i] - levels[i - 1];

//     if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
//       return false;
//     }

//     if (diff < 0) {
//       isIncreasing = false;
//     }

//     if (diff > 0) {
//       isDecreasing = false;
//     }
//   }

//   return isIncreasing || isDecreasing;
// }

// function countSafeReports() {
//   const input = fs.readFileSync('input.txt', 'utf-8');
//   let reports = input.trim().split('\n');
//   let safeCount = 0;

//   for (const report of reports) {
//     if (isSafeReport(report)) {
//       safeCount++;
//     }
//   }
//   return safeCount;
// }

// console.log(countSafeReports());

function isSafeWithDampener(report) {
  const levels = report.split(' ').map(Number);

  const isSafe = (sequence) => {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 1; i < sequence.length; i++) {
      const diff = sequence[i] - sequence[i - 1];

      if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
        return false;
      }

      if (diff > 0) isDecreasing = false;
      if (diff < 0) isIncreasing = false;
    }

    return isIncreasing || isDecreasing;
  };

  if (isSafe(levels)) return true;

  for (let i = 0; i < levels.length; i++) {
    const modifiedLevels = levels.slice(0, i).concat(levels.slice(i + 1));
    if (isSafe(modifiedLevels)) return true;
  }

  return false;
}

function countSafeReportsWithDampener(reports) {
  let count = 0;

  for (const report of reports) {
    if (isSafeWithDampener(report)) {
      count++;
    }
  }

  return count;
}

const input = fs.readFileSync('input.txt', 'utf-8');
const reports = input.split('\n');
console.log(countSafeReportsWithDampener(reports));

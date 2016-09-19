// name columns A, B, ..., Z, AA, AB, AC, etc
// given a number N (> 0) return the name of the column
function nameColumn (num) {
  let colName = '';

  while (num !== 0) {
    let remainder = num % 26 || 26;
    colName = String.fromCharCode(remainder + 64) + colName;
    num = (num - remainder) / 26;
  }

  return colName;
}

// Testing
console.log(nameColumn(1));
console.log(nameColumn(10));
console.log(nameColumn(26));
console.log(nameColumn(35));
console.log(nameColumn(99));
module.exports = function reverse (n) {
  let numStr = n.toString();
  let result = '';
  for (let i = numStr.length - 1; i >= 0; i--) {
    let symbol = numStr[i];
    if (symbol === '-') {
      symbol = '';
    }
    result += symbol;
  }
  return result;
}



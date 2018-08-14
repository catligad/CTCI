const numbersToWords = {
  0: 'zero',
  1: 'one', 
  2: 'two',
  3: 'three',
  4: 'four', 
  5: 'five',
  6: 'six', 
  7: 'seven', 
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen', 
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
}

const numbersToPlace = {
  10: 'ten',
  100:'hundred',
  1000:'thousand',
  1000000:'million',
  1000000000:'billion',
  1000000000000:'trillion',
  1000000000000000:'quadrillion',
  1000000000000000000:'quintillion',
}

Number.prototype.toEnglish = function () {
  //convert number to string
  let numStr = this.toString();
  //declare empty array
  let number = [];
  //declare empty string for sections
  let section = '';
  //declare place counter
  let place = '1';
  //declare length counter
  let counter = 0;
  //declare result string
  let result = '';
  let notAllZeros = false;

  if (numStr === '0') {
    return 'zero';
  }

  //CREATE ARRAY
  // if this number's length is greater than 3,
  if (numStr.length > 3) {
    //loop through the number starting at the end
    //increment 3 places each time
    for (let i = numStr.length - 3; i > -3; i -= 3) {
      //set minimum of first slice index to 0
      let start = Math.max(0, i);
      //slice section of string and push to array
      number.unshift(numStr.slice(start, i+ 3));
    }
  //if the number's length is less than 3
  } else {
    //push this number into an empty array
    number.push(numStr);
  }
}
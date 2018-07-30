// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.

function palindromePermutation(str) {
  str = str.replace(/\s+/g, '');
  let oddNumberOfLetters = 0;
  const counter = {};
  for (let i = 0; i < str.length; i++) {
    if (!counter[str[i]]) {
      counter[str[i]] = 1;
    } else {
      counter[str[i]] += 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if(str.length % 2 === 0 && counter[str[i]] === 1) {
      return false;
    }
    if(counter[str[i]] % 2 !== 0) {
      oddNumberOfLetters += 1;
    }
    if(oddNumberOfLetters === 2) {
      return false;
    }
  }
  return true;
}

function palindromePermutation2(str) {
  str = str.replace(/\s/g, '');
  str = str.split('').sort().join('');
  let oddNumberOfLetters = 0;
  let lastLetter = str[0];
  let letterCounter = 1;
  for(let i = 1; i
     < str.length; i++) {
    if(str[i] === lastLetter) {
      letterCounter += 1;
    } else {
      if(letterCounter % 2 !== 0) {
        oddNumberOfLetters += 1;
      }
      lastLetter = str[i];
      letterCounter = 1;
    }
  }
  if (str.length % 2 === 0 && oddNumberOfLetters > 0) {
    return false;
  } else if(str.length % 2 !== 0 && oddNumberOfLetters > 1) {
    return false;
  }
  return true;
}

console.log(palindromePermutation2('tact coat'));
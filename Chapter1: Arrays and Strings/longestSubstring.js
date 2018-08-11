// You have two arrays of strings, words and parts.
// Return an array that contains the strings from words, modified so that any occurences of the substrings from parts are surrounded by square brackets, following these guidelines:

//1. If several parts substrings occur in one string in words, choose the longest one
//2. If there is still more than one such part, then choose the one that appears first in the string

//INPUT:
// words = ['Apple', 'Melon', 'Orange', 'Watermelon']
// parts = ['a', 'mel', 'lon', 'el', 'an]

//OUTPUT
//['Apple', 'Me['lon']', 'Or['a']nge', 'Water['mel']on'];

//EDGECASES
// capitalization

function substringInArray(words, parts) {
  let toReturn = [];
  parts.sort((a, b) => {
    return b.length - a.length;
  });
  words.forEach( word => {
    let hasBeenFound = false;
    parts.forEach( part => {
      let indexOfWord = word.search(part);
      if (word.substring(indexOfWord, indexOfWord + part.length) === part && !hasBeenFound) {
        let prefix = word.substring(0, indexOfWord);
        let body = word.substring(indexOfWord, indexOfWord + part.length);
        let postfix = word.substring(indexOfWord + part.length);
        toReturn.push(prefix + '[' + body + ']' + postfix);
        hasBeenFound = true;
      }
    });
    if (!hasBeenFound) {
      toReturn.push(word);
    }
  });
  return toReturn;
}

const test = (cb) => {
  const input = [['Apple', 'Melon', 'Orange', 'Watermelon'], ['a', 'mel', 'lon', 'el', 'An']];
  const eOutput = [['Apple', 'Me[lon]', 'Or[a]nge', 'Water[mel]on']];

  for (let i = 0; i < input.length; i+=2) {
    let rOutput = cb(input[i], input[i+1]);
    if (JSON.stringify(rOutput) != JSON.stringify(eOutput[i])) {
      console.log(`${i} failed. Expected ${JSON.stringify(eOutput[i])}, received ${JSON.stringify(rOutput)}`);
    } else {
      console.log(i + ' passed');
    }
  }
}

test(substringInArray)
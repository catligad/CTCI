//  There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

function oneAway(str1, str2){
  if (str1 === str2) {
    return true;
  }
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  let isNotSame = 0;
  let longerWord;
  let isSameLength = true;
  if(str1.length > str2.length) {
    longerWord = str1;
    shorterWord = str2;
    isSameLength = false;
  } else if(str1.length < str2.length) {
    longerWord = str2;
    shorterWord = str1;
    isSameLength = false;
  } else {
    longerWord = str1;
    shorterWord = str2;
  }
  for(let i = 0, j=0; i < longerWord.length; i++, j++) {
    if(longerWord[i] !== shorterWord[j]) {
      isNotSame += 1;
      if(!isSameLength) {
        if(longerWord[i+1] !== shorterWord[j]) {
          return false;
        }
        i++;
      }
    }
    if(isNotSame > 1) {
      return false;
    }
  }
  return true;
}

console.log(oneAway('bale', 'pale'))
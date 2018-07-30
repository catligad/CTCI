// Implement a method to perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. 
// You can assume the string has only uppercase and lowercase letters (a - z).

function stringCompression(str) {
  let letterCounter = 1;
  let prevLetter = str[0];
  let newStr = str[0];
  for(let i = 1; i < str.length; i++) {
    if (str[i] === prevLetter) {
      letterCounter += 1;
    } else {
      newStr = newStr + letterCounter + str[i];
      prevLetter = str[i];
      letterCounter = 1;
    }
    if (i === str.length - 1) {
      newStr += letterCounter;
    }
  }
  if(newStr.length > str.length) {
    return str;
  }
  return newStr;
}

console.log(stringCompression('aaabbbcccccabbbbb'))
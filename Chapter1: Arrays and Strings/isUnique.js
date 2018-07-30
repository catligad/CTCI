//Implement an algorithm to determine if a string has all unique characters. 
function isUnique(str) {
  const dictionary = {};
  for (let i = 0; i < str.length; i++) {
    if (!dictionary[str[i]]) {
      dictionary[str[i]] = 1;
    } else {
      return false;
    }
  }
  return true; 
}

//What if you cannot use additional data structures?
function isUnique2(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}
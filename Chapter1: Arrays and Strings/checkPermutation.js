//Given two strings, write a method to decide if one is a permutation of the other.

//BRUTE FORCE
function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const length = str1.length;
  const dictionary1 = {};
  const dictionary2 = {};
  for (let i = 0; i < length; i++) {
    if (!dictionary1[str1[i]]) {
      dictionary1[str1[i]] = 1;
    } else {
      dictionary1[str1[i]] += 1;
    }
    if (!dictionary2[str2[i]]) {
      dictionary2[str2[i]] = 1;
    } else {
      dictionary2[str2[i]] += 1;
    }
  }
  for (let i = 0; i < length; i++) {
    if (dictionary1[str1[i]] !== dictionary2[str2[i]]) {
      return false;
    }
  }
  return true;
}

//OPTIMIZED ?
var checkPermutation2 = function(str1, str2) {
  if (stringOne.length !== stringTwo.length) {
    return false;
  } else {
    var sortedStr1 = str1.toLowerCase().split('').sort().join('');
    var sortedStr2 = str2.toLowerCase().split('').sort().join('');
    return sortedStr1 === sortedStr2;
  }
};
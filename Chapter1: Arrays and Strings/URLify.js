// Write a method to replace all spaces in a string with '%20: You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

//Input: "Mr John Smith ", 13 
//Output: "Mr%20John%20Smith"

function URLify(str) {
  str = str.trimRight();
  return str.split(' ').join('%20');
};

function URLify2(str) {
  return encodeURIComponent(str);
}

function URLify3(str) {
  let newURL = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      newURL += '%20';
    } else {
      newURL += str[i];
    }
  }
  return newURL;
}

function powerSet(string) {
  var result = [];
  function recurse (prefix, string) {
    for (var i = 0; i < string.length; i++) {
      result.push(prefix + string[i]);
      recurse(prefix + string[i], string.slice(i + 1));
    }
  }
  recurse('', string);
  return result;
}
powerSet('abcd');


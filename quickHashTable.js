var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storageLimit = 10000;
  const hashTable = {};
  
  result.insert = function(key, val) {
    var storage = [];
    const index = getIndexBelowMaxForKey(key, storageLimit);
    hashTable[index] = hashTable[index] || storage;
    hashTable[index].push([key, val]);
    // console.log(JSON.stringify(hashTable));
  };

  result.retrieve = function(key) {
    const index = getIndexBelowMaxForKey(key, storageLimit);
    var target = undefined;
    hashTable[index].forEach( tuple => {
      if (tuple[0] === key) {
        target = tuple[1];
      };
    })
    // console.log(target);
    return target;
  };

  result.remove = function(key) {
    const index = getIndexBelowMaxForKey(key, storageLimit);
    hashTable[index].forEach( (tuple, i) => {
      if (tuple[0] === key) {
        hashTable[index].splice(i,1)
      };
    });
    return 'Key Deleted';
  };

  return result;
};


module.exports = makeHashTable();


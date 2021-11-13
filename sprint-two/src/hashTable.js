

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, []); // set buckets per every index in the array
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) { // bucket[i][0] is the tuple key
      bucket[i][1] = v; // bucket[i][1] is the tuple value
      return;
    }
  }
  bucket.push([k, v]);
};
//store values and keywords
//overwrites values with matching keywords.
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    var tupleKey = tuple[0];
    var tupleValue = tuple[1];

    if (tupleKey === k) {
      return tupleValue;
    }
  }
};
//should be just a simple grab function
//beware hash collisions where the hash function generates the same index for more than one key.
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    var tupleKey = tuple[0];
    var tupleValue = tuple[1];

    if (tupleKey === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 HashTable:O(n)
return:O(n)
retrieve:O(n)
remove:O(n)
 */

var myHashTable = new HashTable();

myHashTable.insert('Steven', 'Seagal');

// console.log(myHashTable.retrieve('Steven')) // 'Seagal

myHashTable.insert('Steven', 'Spielberg');

myHashTable.retrieve('Steven');

myHashTable.insert('Bob', 'Loblaw');
myHashTable.insert('Bob', 'Barker');

// console.log(myHashTable.retrieve('Bob')); // Barker

myHashTable.insert('Steven', 'Tyler');

myHashTable.remove('Steven');

// console.log(myHashTable.retrieve('Steven')); // undefined

// console.log(myHashTable.retrieve('val1')); // 'val1
// console.log(myHashTable.retrieve('val2'));

// console.log(myHashTable);

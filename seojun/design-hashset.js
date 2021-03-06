/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.set = [];
};

/**
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function (key) {
  if (this.set.includes(key)) return;

  this.set.push(key);
};

/**
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function (key) {
  if (!this.set.includes(key)) return;

  const removeIndex = this.set.indexOf(key);

  this.set.splice(removeIndex, 1);
};

/**
* Returns true if this set contains the specified element
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function (key) {
  return this.set.includes(key);
};

/**
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/

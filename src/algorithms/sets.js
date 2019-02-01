// ***** Sets *****
// No duplicate items. No particular order.
// Typical use: check presence of item
const MySet = function(collection = []) {
    this.collection = collection; // will hold set
};

/**
 *  Checks presence of element
 *  @param Data element
 *  @return Boolean
 */
MySet.prototype.has = function(element) {
    return this.collection.indexOf(element) !== -1;
};

/**
 *  Returns all values in the Set
 *  @param
 *  @return
 */
MySet.prototype.values = function() {
    return this.collection;
};

/**
 *  Add element to the set
 *  @param Data element
 *  @return Boolean
 */
MySet.prototype.add = function(element) {
    if (this.has(element)) {
        return false;
    } else {
        this.collection.push(element);
        return true;
    }
};

/**
 *  Remove element from set
 *  @param Data element
 *  @return Boolean
 */
MySet.prototype.remove = function(element) {
    if (this.has(element)) {
        this.collection = this.collection.filter(function(itemInCollection) {
            if (itemInCollection !== element) return itemInCollection;
        });

        return true;
    }
    return false;
};

/**
 * Returns size of Set
 * @param
 * @return Number
 */
MySet.prototype.size = function() {
    return this.collection.size;
};

/**
 *  Returns union of two sets
 *  @param Array otherSet
 *  @return Array unionSet
 */
MySet.prototype.union = function(otherSet) {
    var unionSet = new MySet();
    var firstSet = this.values();
    var secondSet = otherSet;

    firstSet.forEach(function(element) {
        unionSet.add(element);
    });

    secondSet.forEach(function(element) {
        unionSet.add(element);
    });
    return unionSet.values();
};

export default MySet;

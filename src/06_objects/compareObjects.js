/**
 * Write a function that makes a deep comparison between two objects.
 * Deep Comparison: two values are only considered equal if they are the same value or are objects with the same 
 * properties whose values are also equal when compared with a recursive call to deepEqual.
 * @param {*} obj1 
 * @param {*} obj2 
 */
function compareObjects(obj1, obj2) {
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return obj1 === obj2; // Compare primitive values
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false; // Objects have different numbers of keys
    }

    for(let i = 0; i < keys1.length; i++ ){
        const key = keys1[i];
        if(!compareObjects(obj1[key], obj2[key])){
            return false;
        }
    };

    return true;
    // Your code here
}
  
module.exports = compareObjects;
  
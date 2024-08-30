/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
var makeStringsEqual = function(s, target) {
    if (s === target) return true;
    let sHasOne = s.includes('1');
    let targetHasOne = target.includes('1');
    return sHasOne === targetHasOne;
    
};

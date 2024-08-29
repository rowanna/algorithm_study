/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const convertX = String(x)
    const returnValue = convertX === convertX.split("").reverse().join("");
    return returnValue
};
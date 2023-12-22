const reverseString = function(str) {
    let strArray = str.split("");
    strArray = strArray.reverse();
    let reverseStr = strArray.join("");
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;

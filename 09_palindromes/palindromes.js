const palindromes = function (inputStr) {
    let str = inputStr.toLowerCase().replace(/[^a-z0-9]/g,"");
    let reverseStr = str.split("").reverse().join("");
    // console.log(reverseStr)

    if (str == reverseStr) {
        return true;
    }
    return false;
};


// Do not edit below this line
module.exports = palindromes;

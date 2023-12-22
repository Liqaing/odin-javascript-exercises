const sumAll = function(num1, num2) {
    
    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    let sum = 0;
    let startNum;
    let endNum;
    num1 > num2 ? (startNum = num2, endNum = num1) : (startNum = num1, endNum = num2); 

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    console.log(sum)
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const fibonacci = function(num) {
    try {
        num = parseInt(num);
    }
    catch {
        return;
    }

    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    let arr = [];
    for (let i = 0; i < num; i++) {
        if (i === 0 || i === 1) {
            arr[i] = 1;
        }
        else {
            let value = arr[i - 1] + arr[i - 2];
            arr[i] = value;
        }
    }
    return arr[num - 1];
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;

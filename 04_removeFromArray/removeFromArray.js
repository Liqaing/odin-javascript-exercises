const removeFromArray = function() {
    let arr = arguments[0];
    for (let i = 1; i < arguments.length; i++) {

        const indexOfItem = arr.indexOf(arguments[i]);
        if (indexOfItem > -1) {
            arr.splice(indexOfItem, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

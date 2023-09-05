const removeFromArray = function() {

    let arrayWithValue = arguments[0];
    let deletedValue = Array.from(arguments);
    deletedValue.shift();

    for (let i = 0; i < arrayWithValue.length; i++) {
        if (arrayWithValue[i] === deletedValue[0]) {
            arrayWithValue.splice(i, 0);
        }
    }

    return arrayWithValue;

};

// Do not edit below this line
module.exports = removeFromArray;

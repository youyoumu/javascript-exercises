const repeatString = function(string,num) {

    let repeatedString = string;

    if (num > 0) {
        for (i=1;i<num;i++) {
        repeatedString = repeatedString.concat(string);
        };
    }

    else if (num === 0) {
        repeatedString = ""
    }

    else {
        repeatedString = "ERROR"
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;

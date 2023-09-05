const reverseString = function(string) {

    let refersedString = ""

    for (let i = string.length; i > 0; i--) {
        
        refersedString = refersedString.concat(string.charAt(i-1));
    }

    return refersedString;
};

// Do not edit below this line
module.exports = reverseString;

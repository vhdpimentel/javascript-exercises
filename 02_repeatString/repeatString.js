const repeatString = function(inputString, n) {
    let outputString = '';
    
    if (n < 0) return 'ERROR';

    for (i = 0; i < n; i++) {
        outputString += inputString;
    }
    
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;

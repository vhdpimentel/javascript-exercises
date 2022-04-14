const removeFromArray = function(inputArray, removalTarget) {
    const outputArray = inputArray;
    let matchFound = false;
    let i = 0;
    while (!matchFound) {
        const currentElement = inputArray[i];
        matchFound = (removalTarget === currentElement);
        
        if (matchFound) {
            outputArray.splice(i, 1);
        }

        i++;
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;

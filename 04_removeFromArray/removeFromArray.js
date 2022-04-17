const removeFromArray = function(inputArray, ...removalTargets) {

    for (let i = 0; i < removalTargets.length; i++) {

        let matchFound = false;
        let j = 0;

        while (!matchFound && j < inputArray.length) {

            matchFound = (removalTargets[i] === inputArray[j]);
            
            if (matchFound) {
                inputArray.splice(j, 1);
            }

            j++;
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;

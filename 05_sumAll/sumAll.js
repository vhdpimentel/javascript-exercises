const sumAll = function(integerOne, integerTwo) {
    if(integerOne < 0 || integerTwo < 0 || typeof(integerOne) !== 'number' ||
        typeof(integerTwo) !== 'number') return 'ERROR';

    const a = (integerOne < integerTwo)? integerOne : integerTwo;
    const b = (integerTwo > integerOne)? integerTwo : integerOne;

    const result = ((a + b) / 2) * (1 + b - a); 
    return result;
};

// Do not edit below this line
module.exports = sumAll;

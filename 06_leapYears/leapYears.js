const leapYears = function(year) {
    const result = (!(year % 400)) ? true
        : (!(year % 100)) ? false
        : (!(year % 4));
        
    return result;
};

// Do not edit below this line
module.exports = leapYears;

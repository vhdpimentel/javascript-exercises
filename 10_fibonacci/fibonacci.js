const fibonacci = function(n) {
    n = Number(n);

    if (n === 1 || n === 2) {
        return 1;
    } else if (n > 1){
        return fibonacci(n - 1) + fibonacci(n - 2); 
    } else return 'OOPS';                                          
};

// Do not edit below this line
module.exports = fibonacci;

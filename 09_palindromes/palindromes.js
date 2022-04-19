const palindromes = function (word) {
    let positive = true;

    //filter out punctuation, upper case and spaces
    const filteredWord = word.replace(/[^a-zA-Z]+/g, '').toLowerCase();

    let i = 0;
    while (positive && i < filteredWord.length / 2){
        positive = (filteredWord[i] === filteredWord[filteredWord.length - i - 1]);
        i++;
    }
    return positive;
};

// Do not edit below this line
module.exports = palindromes;

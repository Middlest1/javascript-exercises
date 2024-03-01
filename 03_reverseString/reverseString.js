
// Pseudocode
// take the string and split it into an array
// reverse the order of the array
// take each word in the array and split it into letters
// reverse the order of the letters
// put the letters back together


const reverseString = function (theString) {
    const makeStringArray = theString.split(" ").reverse();
    console.log(makeStringArray);

    const reverseEachWordOfArray = makeStringArray.map(function (word) {
        let wordsSplit = word.split("");
        let lettersReverse = wordsSplit.reverse();
        let rejoinLetters = lettersReverse.join("");
        return rejoinLetters;
    });

    // console.log(reverseEachWordOfArray);
    return reverseEachWordOfArray.join(" ");
}

console.log(reverseString("hello there"));


// const reverseString = function (string) {
//     return string.split("").reverse().join("");
//   };

//   module.exports = reverseString;

// Do not edit below this line

module.exports = reverseString;

// What type of loop should I use? Seems like it could be accomplished with for or while?
// Create a variable to hold the final sum, set this to equal return value?
// Loop through the range of numbers y times starting at x times
// Every time it loops add + 1 to the finalSum, remember the finalSum for the next iteration


const sumAll = function (numOne, numTwo) {

    if (numOne < 0 || numTwo < 0 || typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return 'ERROR';
    }

    let finalSum = 0;
    let biggestNum = numOne > numTwo ? numOne : numTwo;
    let smallestNum = numOne < numTwo ? numOne : numTwo;

    for (let i = smallestNum; i <= biggestNum; i++) {
        console.log('i is: ' + i);
        console.log('The final sum is: ' + finalSum);
        console.log(finalSum += i);
    }

    return finalSum

};

console.log(sumAll(1, 3))

// Do not edit below this line
module.exports = sumAll;

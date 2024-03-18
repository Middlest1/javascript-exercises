// Function takes fibonaccilength as a number
// The function loops fibonacciLength times
// Every time it loops, the current number is added to the next number (start at 0)
// It returns the sum of the last two numbers in the series of loops 
// How to get from 0, 1 to 1, 2 to 3, 5


const fibonacci = function (fibonacciLength) {
    let firstNum = 0;
    // console.log(firstNum);
    let secondNum = 1;
    // console.log(secondNum);
    let sumLastTwo = firstNum + secondNum;
    // console.log(sumLastTwo);
    for (i = 1; i < fibonacciLength; i++) {
        firstNum = secondNum + sumLastTwo;
        // console.log(firstNum);
        secondNum = firstNum + sumLastTwo;
        // console.log(secondNum);
        sumLastTwo = firstNum + secondNum;
        // console.log(sumLastTwo)
    }
    return sumLastTwo;

};

console.log(fibonacci(6))

// Do not edit below this line
module.exports = fibonacci;


const fibonacci = function (fibonacciLength) {
    // Initialize the array with the first two numbers of the Fibonacci sequence
    let sequence = [0, 1];

    // Start the loop from 2 because the first two numbers are already in the array
    for (let i = 2; i < fibonacciLength; i++) {
        // Push the sum of the last two numbers in the sequence to the array
        sequence.push(sequence[i - 1] + sequence[i - 2]);
        console.log(sequence);
    }

    // Return the Fibonacci sequence array
    return sequence;
};

console.log(fibonacci(9));
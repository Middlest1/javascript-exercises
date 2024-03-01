

// function removeFromArray(array, ...args) {
//      return array.filter(function filterNumbers(numbers) {
//        return !args.includes(numbers);
//      });

// }

// function removeFromArray(array, ...args) {
//     return array.filter(function(numbers) {
//         return !args.includes(numbers);
//     });
// }

function removeFromArray(array, ...args) {
    return array.filter(numbers => !args.includes(numbers));
    };

const arrayOne = [1, 2, 3, 4, 5, 6];

console.log(removeFromArray(arrayOne, 1, 2, 3, 4));


/* Another solution */
// const removeFromArray = function (array, ...args) {
//     const newArray = [];

//     array.forEach((item) => {
//         if (!args.includes(item)) {
//             newArray.push(item);
//           }
//         });

//         return newArray;
//     };


// Do not edit below this line
module.exports = removeFromArray;
